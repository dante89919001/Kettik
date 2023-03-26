import { EventEmitter } from 'events';

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { BehaviorSubject } from 'rxjs';

import {
  AuthSubjectValue,
  AuthTokens,
  LoginPayloadType,
  Profile,
  ProfileUpdateDTO,
  RegisterResponse,
  ResetPasswordResponseDto,
  SendOtpResponse,
  SignUpResponse,
} from '../types/griffon';

export enum AuthStatus {
  UNAUTHORIZED = 'UNAUTHORIZED',
}

export interface AuthConfig {
  griffonApiRoot: string;
  griffonClientId: string;
  griffonClientSecret: string;
  griffonBucketId: string;
}

export const TOKEN_STORAGE_KEY = 'dar-u-web-auth';
export const PROFILE_STORAGE_KEY = 'dar-u-web-profile';

const getAuthSubjectValueFromStorage = (): AuthSubjectValue | null => {
  if (typeof window === 'undefined') return null;

  const _profile = localStorage.getItem(PROFILE_STORAGE_KEY);
  const _tokens = localStorage.getItem(TOKEN_STORAGE_KEY);

  if (!_tokens || !_profile) {
    return null;
  }

  try {
    const profile = JSON.parse(_profile);
    const tokens = JSON.parse(_tokens);
    return {
      profile,
      tokens,
    };
  } catch (e) {
    return null;
  }
};

export class AuthService {
  httpClient: AxiosInstance;

  private tokenRefreshing: Promise<void> | null = null;

  public loginStatus = new EventEmitter();

  private loggedIn = new BehaviorSubject<AuthSubjectValue | null>(
    getAuthSubjectValueFromStorage()
  );
  public loggedIn$ = this.loggedIn.asObservable();

  constructor(private config: AuthConfig) {
    this.httpClient = axios.create();

    this.httpClient.interceptors.response.use(
      (response: AxiosResponse) => response,
      this.refreshTokenErrorInterceptor
    );
  }

  static createInstance(config: AuthConfig) {
    return new AuthService(config);
  }

  public setLoggedInValue = (v: AuthSubjectValue | null) => {
    this.loggedIn.next(v);
  };

  public createHttpClient(axiosConfig?: AxiosRequestConfig): AxiosInstance {
    const httpClient = axios.create(axiosConfig);
    httpClient.interceptors.request.use(this.authTokenRequestInterceptor);
    httpClient.interceptors.response.use(
      (response: AxiosResponse) => response,
      this.refreshTokenErrorInterceptor
    );
    return httpClient;
  }

  private authTokenRequestInterceptor = async (config: AxiosRequestConfig) => {
    // Don't override defined header
    if (config.headers?.['Authorization']) {
      return config;
    }
    if (this.tokenRefreshing) {
      await this.tokenRefreshing;
    }
    const tokens = this.getTokens();
    const now = new Date();
    // Token is expired
    if (
      tokens &&
      tokens.expire_date &&
      tokens.expire_date - now.getTime() <= 0
    ) {
      this.tokenRefreshing = new Promise((resolve) => {
        this.refreshTokenAndProfile()
          .catch(() => {
            this.loginStatus.emit(AuthStatus.UNAUTHORIZED, true);
            this.logout();
          })
          .finally(() => {
            resolve();
            this.tokenRefreshing = null;
          });
      });
      await this.tokenRefreshing;
    }
    // Add token to headers
    const idToken = this.getIdToken();
    if (idToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${idToken}`,
      };
    } else {
      delete config.headers?.['Authorization'];
    }
    return config;
  };

  public getIdToken = (): string | null => {
    let tokens: AuthTokens | null = null;
    const storedTokens = window.localStorage.getItem(TOKEN_STORAGE_KEY);
    if (!storedTokens) {
      return null;
    }
    try {
      tokens = JSON.parse(storedTokens);
    } catch (e) {
      console.error(e);
    }
    return tokens?.id_token ?? null;
  };

  public getAccessToken = (): string | null => {
    let tokens: AuthTokens | null = null;
    try {
      tokens = JSON.parse(localStorage.getItem(TOKEN_STORAGE_KEY) || '');
    } catch (e) {
      console.error(e);
    }
    return tokens?.access_token ?? null;
  };

  public persistProfile = (profile: Profile) => {
    
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
  };

  public persistTokens = (tokens: AuthTokens) => {
    const expire_date = new Date().getTime() + tokens.expires_in * 1000;
    localStorage.setItem(
      TOKEN_STORAGE_KEY,
      JSON.stringify({
        ...tokens,
        expire_date,
      })
    );
  };

  public getTokens = (): AuthTokens | null => {
    let tokens: AuthTokens | null = null;

    if (typeof window === 'undefined') {
      return null;
    }
    const storedTokens = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (!storedTokens) {
      return null;
    }
    try {
      tokens = JSON.parse(storedTokens);
    } catch (e) {
      console.error(e);
    }
    return tokens;
  };

  private refreshTokenErrorInterceptor = async (axiosError: AxiosError) => {
    if (
      axiosError.response?.status === 401 ||
      axiosError.response?.status === 403
    ) {
      if (!this.tokenRefreshing) {
        this.tokenRefreshing = new Promise((resolve) => {
          this.refreshTokenAndProfile()
            .then((authInfo) => {
              return authInfo;
            })
            .catch(() => {
              this.loginStatus.emit(AuthStatus.UNAUTHORIZED, true);
              this.logout();
            })
            .finally(() => {
              resolve();
              this.tokenRefreshing = null;
            });
        });
      }
      await this.tokenRefreshing;
      const idToken = this.getIdToken();
      if (idToken && axiosError.config) {
        axiosError.config.headers = {
          ...axiosError.config.headers,
          Authorization: `Bearer ${idToken}`,
        };
      }
      return axios.request(axiosError.config);
    }
    throw axiosError;
  };

  public refreshTokenAndProfile = () => {
    return this.refreshToken().then(async (authInfo) => {
      this.persistTokens(authInfo);
      const profile = await this.getProfile();
      this.persistProfile(profile);
      this.setLoggedInValue({ profile, tokens: authInfo });
      return authInfo;
    });
  };

  public login = ({ password, username }: LoginPayloadType) => {
    const params = new URLSearchParams({
      client_id: this.config.griffonClientId,
      client_secret: this.config.griffonClientSecret,
      grant_type: 'password',
      username,
      password,
    });
    return axios
      .post<AuthTokens>(`${this.config.griffonApiRoot}/oauth/token`, params)
      .then((res) => res.data);
  };

  public loginWithCode = ({ code }: { code: string }) => {
    const params = new URLSearchParams({
      client_id: this.config.griffonClientId,
      client_secret: this.config.griffonClientSecret,
      grant_type: 'code',
      code,
    });
    return axios
      .post<AuthTokens>(`${this.config.griffonApiRoot}/oauth/token`, params)
      .then((res) => res.data);
  };

  public refreshToken = () => {
    const params = new URLSearchParams();
    params.append('client_id', this.config.griffonClientId);
    params.append('client_secret', this.config.griffonClientSecret);
    params.append('refresh_token', this.getTokens()?.refresh_token || '');
    params.append('grant_type', 'refresh_token');

    return axios
      .post<AuthTokens>(`${this.config.griffonApiRoot}/oauth/token`, params)
      .then((res) => res.data);
  };

  public sendOtp = (code: string, sid?: string) => {
    return axios
      .post<SendOtpResponse>(
        `${this.config.griffonApiRoot}/oauth/signup/verify`,
        {
          code,
        },
        {
          params: {
            sid,
          },
        }
      )
      .then((res) => res.data);
  };

  public checkIfUserExists = (username: string) => {
    return axios.post<any>(`${this.config.griffonApiRoot}/oauth/signup/check`, {
      username,
      bucket: this.config.griffonBucketId,
    });
  };

  public reSendOtp = (sid: string) => {
    return axios
      .post<SendOtpResponse>(
        `${this.config.griffonApiRoot}/oauth/signup/resend`,
        null,
        {
          params: {
            sid,
          },
        }
      )
      .then((res) => res.data);
  };

  public reSendResetOtp = (sid: string) => {
    return axios
      .post<SendOtpResponse>(
        `${this.config.griffonApiRoot}/oauth/password/reset/resend`,
        null,
        {
          params: {
            sid,
          },
        }
      )
      .then((res) => res.data);
  };

  public signUp = (username: string) => {
    const params = new URLSearchParams();
    params.append('client_id', this.config.griffonClientId);
    params.append('client_secret', this.config.griffonClientSecret);
    params.append('username', username);
    return axios
      .post<SignUpResponse>(
        `${this.config.griffonApiRoot}/oauth/signup`,
        params
      )
      .then((res) => res.data);
  };

  public register = (sid: string, password: string) => {
    return axios
      .post<RegisterResponse>(
        `${this.config.griffonApiRoot}/oauth/register`,
        {
          password,
        },
        {
          params: {
            sid,
          },
        }
      )
      .then((res) => res.data);
  };

  public getProfile = () => {
    return this.httpClient
      .get<Profile>(`${this.config.griffonApiRoot}/oauth/profile`, {
        headers: {
          Authorization: `Bearer ${this.getIdToken()}`,
        },
      })
      .then((res) => res?.data);
  };

  public createProfile = (data: ProfileUpdateDTO) => {
    return axios
      .post<Profile>(`${this.config.griffonApiRoot}/oauth/profile`, data, {
        headers: {
          Authorization: `Bearer ${this.getIdToken()}`,
        },
      })
      .then((res) => res.data);
  };

  public updateProfile = (data: ProfileUpdateDTO) => {
    return axios
      .put<Profile>(`${this.config.griffonApiRoot}/oauth/profile`, data, {
        headers: {
          Authorization: `Bearer ${this.getIdToken()}`,
        },
      })
      .then((res) => res.data);
  };

  public sendRestorePassword = (username: string) => {
    return axios
      .post<SignUpResponse>(
        `${this.config.griffonApiRoot}/oauth/password/reset`,
        {
          client_id: this.config.griffonClientId,
          username,
        }
      )
      .then((res) => res.data);
  };

  public verifyRestoreSecret = (code: string, sid?: string) => {
    return axios
      .post<SendOtpResponse>(
        `${this.config.griffonApiRoot}/oauth/password/reset/verify`,
        {},
        {
          params: {
            sid,
            code,
          },
        }
      )
      .then((res) => res.data);
  };

  public sendEmailVerificationPassword = (email: string, password: string) => {
    return axios
      .post(
        `${this.config.griffonApiRoot}/oauth/user/email`,
        {
          email,
          password,
          redirect_uri: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        {
          headers: {
            Authorization: `Bearer ${this.getAccessToken()}`,
          },
        }
      )
      .then((res) => res.data);
  };

  public sendEmailVerificationCode = (email: string, password: string) => {
    return axios
      .post(
        `${this.config.griffonApiRoot}/oauth/user/email/code`,
        {
          email,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${this.getIdToken()}`,
          },
        }
      )
      .then((res) => res.data);
  };

  public verifyUpdatedEmailCode = (
    verification_token: string,
    code: string
  ) => {
    return axios
      .get(
        `${this.config.griffonApiRoot}//oauth/user/email/code/${verification_token}`,
        {
          params: {
            code,
          },
        }
      )
      .then((res) => res.data);
  };

  public setResetPassword = (sid: string, new_password: string) => {
    return axios
      .put<ResetPasswordResponseDto>(
        `${this.config.griffonApiRoot}/oauth/password/reset`,
        { new_password },
        {
          params: {
            sid,
          },
        }
      )
      .then((res) => res.data);
  };

  public updateAvatar = (body: any) => {
    return axios
      .post(`${this.config.griffonApiRoot}/oauth/profile/avatar`, body, {
        headers: {
          Authorization: `Bearer ${this.getAccessToken()}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => res.data);
  };

  public deleteAvatar = () => {
    return axios
      .delete(`${this.config.griffonApiRoot}/oauth/profile/avatar`, {
        headers: {
          Authorization: `Bearer ${this.getAccessToken()}`,
        },
      })
      .then((res) => res.data);
  };

  public logout = () => {
    localStorage.removeItem(PROFILE_STORAGE_KEY);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  };
}
