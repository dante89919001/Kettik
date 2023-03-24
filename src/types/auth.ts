export interface RegisterFormData {
  name:string;
  userEmail: string;
  password: string;
  otp:string;
}
export interface LoginFormData {
  userEmail: string;
  password: string;
}