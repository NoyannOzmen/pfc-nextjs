'use client'
import Link from "next/link";
import { useUserContext } from "@/contexts/UserContext";

function HeaderLogged() {

 const auth = useUserContext();

  return (
    <>
      <li className="border-2 border-accents2-dark max-[767px]:border-b-fond md:mr-4 md:border-r-fond px-4 max-[767px]:pb-2 place-self-center md:place-self-start pl-2">
        {auth.user?.refuge &&
          <Link href="/associations/profil">Bonjour : {auth.user.refuge.nom}</Link>
        }
        {auth.user?.accueillant &&
          <Link href="/famille/profil">Bonjour : {auth.user.accueillant.prenom ? `${auth.user.accueillant.prenom}` : `${auth.user.accueillant.nom}`}</Link>}
      </li>
      <li className="border-2 border-accents2-dark mr-0 max-[767px]:border-b-fond  md:border-r-fond px-4 pr-6 max-[767px]:pb-2 place-self-center md:place-self-start">
        {auth.user?.accueillant &&
        <Link tabIndex={0} className="hover:text-accents1-light" href="/famille/profil">Mon profil</Link>
        }
        {auth.user?.refuge &&
        <Link tabIndex={0} className="hover:text-accents1-light" href="/associations/profil">Tableau de&nbsp;bord</Link>
        }
      </li>

      <li id="log-out" className="border-2 border-accents2-dark place-self-center md:place-self-start pl-2">
        <p className="hover:text-accents1-light" onClick={auth.logOut}>Se Déconnecter</p>
      </li>
    </>
  )
}

export default HeaderLogged;