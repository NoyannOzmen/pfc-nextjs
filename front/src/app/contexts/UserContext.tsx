'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { IUtilisateur } from '@/@types/index';

type UserContextType = {
  user: IUtilisateur | null;
  setUser: React.Dispatch<React.SetStateAction<IUtilisateur | null>>;
  /* token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>; */
  userMessage: string | null;
  /* setUserMessage : React.Dispatch<React.SetStateAction<string | null>>; */
  logIn : (credentials : { email: string; mot_de_passe : string}) => Promise<void>;
  logOut(): Promise<void>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextType | null>(null);

/* const getInitialState = () => {
  const user = sessionStorage.getItem("user");
  return user ? JSON.parse(user) : null
} */

export default function UserContextProvider({
  children,
}: UserContextProviderProps) {
  const [user, setUser] = useState<IUtilisateur | null>(null);
  /* const [user, setUser] = useState(null); */

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user))
}, [user])

  const [userMessage, setUserMessage] = useState(null);
  /* const [token, setToken] = useState(sessionStorage.getItem("site") || ""); */
  const router = useRouter()

  async function logIn(credentials: { email: string; mot_de_passe : string}) {

    setUserMessage(null)
    try {
      const response = await fetch
        (process.env.NEXT_PUBLIC_API_URL + `/connexion`,
        {
          method: 'POST',
          headers: { "Content-type" : "application/json" },
          body: JSON.stringify(credentials),
        }
      );

      const res = await response.json();

      if (!res.ok) {
        setUserMessage(res.message)
        router.push('/connexion')        
      }
      if (res) {
        setUser(res);
        /* setToken(res.token); */
        sessionStorage.setItem("site", res.token);
        router.push('/')
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function logOut() : Promise<void> {
    setUser(null)
    /* setToken(''); */
    sessionStorage.removeItem("site");
    router.push('/')
  };

  return (
    <UserContext.Provider value={{ user, setUser, /* token, */ userMessage, logIn, logOut}}>{children}</UserContext.Provider>
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
