'use client'
import { useUserContext } from "@/contexts/UserContext";
import HeaderLogged from "./HeaderLogged";
import HeaderLogin from "./HeaderLogin";

export default function HeaderNav() {
  const auth = useUserContext();

  function closeMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("#nav-links");  

    hamburger?.classList.remove("active");
    navMenu?.classList.remove("active");
  }

  return (
    <nav  onClick={closeMenu} className="rounded-br-lg md:rounded-b-lg flex-auto  bg-accents2-dark text-fond p-3 text-base md:text-lg md:mr-4">
      <ul className="flex flex-col md:flex-row flex-nowrap justify-around">
        {/* Login Navigation */}
        { auth.user ? (
          <HeaderLogged />      
        ) : (
          <HeaderLogin />
        )}
          
      </ul>           
  </nav>
  )
}