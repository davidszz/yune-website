import { APIUser } from 'discord-api-types/v10';
import { parseCookies, destroyCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";

import { api } from "@services/api";
import { LoadingScreen } from '@components/LoadingScreen';

interface IAuthContextType {
  user?: APIUser | null;
  logout: () => void;
}

interface IProps {
  children?: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextType);

export function AuthProvider({ children }: IProps) {
  const [user, setUser] = useState<APIUser | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const query = location.search?.slice(1).split('&');
    const code = query.find(x => x.startsWith('code='))?.replace('code=', '');

    if (code) {
      authUser(code);
    } else {
      getUser();
    }
    
    async function authUser(code: string) {
      try {
        const response = await api.get(`/auth?code=${code}`);
        if (response.data.success) {
          setUser(response.data.user);
          api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        }
      } catch(err) {
        console.error(err);
      } finally {
        window.history.replaceState({}, '', '/');
        setLoading(false);
      }
    }

    async function getUser() {
      const { token } = parseCookies();
      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`; 

        try {
          const { data } = await api.get('/users/@me');
          if (data) {
            setUser(data);
          }
        } catch {
          /* Nothing */
        }
      }

      setLoading(false);
    }
  }, []);

  function logout() {
    destroyCookie(undefined, 'token');
    setUser(null);
  }

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}