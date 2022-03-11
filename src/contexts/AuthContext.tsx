import { createContext, ReactNode } from "react";
import { APIUser } from 'discord-api-types/v10';

interface IAuthContextType {
  user?: APIUser;
}

interface IProps {
  children?: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextType);

export function AuthProvider({ children }: IProps) {
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
}