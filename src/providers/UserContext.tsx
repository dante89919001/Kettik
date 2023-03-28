import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
  } from 'react';
  import { authService } from '..';
  
  export interface UserContexState {
    username: string;
    changeUsername: (v: string) => void;
  }
  
  export const UserContext = createContext<UserContexState | undefined>(
    undefined
  );
  
  export const UserContextProvider: React.FC<PropsWithChildren> = ({
    children,
  }) => {
    const [username, setUsername] = useState('');
  
    useEffect(() => {
      if (!authService.getIdToken()) {
        return;
      }
      authService.getProfile().then((r) => {
        setUsername(r.email);
      });
    }, []);
  
    const handleUsernameChange = (v: string) => {
      setUsername(v);
    };

    
  
    return (
      <UserContext.Provider
        value={{
          username,
          changeUsername: handleUsernameChange,
        }}
      >
        {children}
      </UserContext.Provider>
    );
  };
  
  export const useUserContext = () => {
    const context = useContext(UserContext);
    if (typeof context === 'undefined') {
      throw Error('User context is not defined');
    }
    return context;
  };
  