import { createContext, useContext, useMemo, useState } from 'react';
import { Utilisateur } from '../@types/Utilisateur.ts';

type UserContextType = {
  user: Utilisateur | null;
  setUser: React.Dispatch<React.SetStateAction<Utilisateur | null>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextType | null>(null);

export default function UserContextProvider({
  children,
}: UserContextProviderProps) {
  const [user, setUser] = useState<Utilisateur | null>(null);

  const contextValue = useMemo(() => ({ user, setUser }), [user]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      'useUserContext doit être utilisé dans UserContextProvider'
    );
  }

  return context;
}
