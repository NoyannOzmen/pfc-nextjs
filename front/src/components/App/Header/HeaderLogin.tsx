import { Link } from "react-router-dom";

function HeaderLogin() {
  return (
    <>
          <li id="log-in" className="border-2 border-accents2-dark max-[767px]:border-b-fond md:mr-4 md:border-r-fond px-4 max-[767px]:pb-2 place-self-center md:place-self-start pl-2">
            <Link to="/connexion" className="hover:text-accents1-light">Se Connecter</Link>
          </li>
          
          <div id="log-in" className="flex flex-row place-self-center md:place-self-start pl-2 gap-2">
            <li className="border-2 border-accents2-dark place-self-center md:place-self-start pl-2">
              <p>S'Inscrire :</p>
            </li>

            <li className="border-2 border-accents2-dark">
              <Link to="/famille/inscription" className="hover:text-accents1-light">Famille</Link>
            </li>
            
            <li className="border-2 border-accents2-dark">
              <Link to="/association/inscription" className="hover:text-accents1-light">Association</Link>
            </li>
          </div>
    </>
  )
}

export default HeaderLogin;