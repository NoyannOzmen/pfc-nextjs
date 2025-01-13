import { Link } from "react-router-dom";
import { useEffect } from "react";

function FosterProfile() {
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src="../../../src/assets/utils/editInputs.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return(
    <main className="justify-self-stretch flex-1">
	<h2 className="font-grands text-3xl text-center my-2 py-6">Bienvenue sur votre espace personnel</h2>
  <div className="flex flex-col content-center justify-center mx-auto mb-4 w-[80%]">

    <nav className="flex flex-wrap justify-center md:justify-start">
      <ul className="flex flex-wrap-reverse gap-x-2 mx-3 justify-center font-semibold md:justify-start md:ml-10 text-xl">
        <li><Link to="/famille/profil" tabIndex={0}><button id="dashbtn-1" className="dashbtn dashbtn-active" tabIndex={-1}>Mon profil</button></Link></li>
        <li><Link to="/famille/profil/demandes" tabIndex={0}><button id="dashbtn-2" className="dashbtn" tabIndex={-1}>Demandes</button></Link></li>
      </ul>
      <div className="mx-2 grow w-[90%] h-2 bg-accents1-dark rounded-t-lg"></div>
    </nav>

    <div className="font-body bg-zoning rounded-lg shadow dark:bg-gray-800 mb-4">

      <section className="flex flex-wrap justify-center" id="dashboard-container">
        <h3 className="font-grands text-3xl text-center my-2 pt-5 w-full">Mon profil</h3>

{/*         <% if(locals.message.length != 0){ %>
          <div>
            <p className="font-grands font-base text-accents1 text-center"><%= message.erreur %></p>
          </div>
        <% } %> */}

        <form className="flex flex-col flex-wrap content-center justify-around text-texte w-full" action="/famille/profil" method="POST">
          
          <fieldset className="w-[60%] font-body rounded-lg shadow dark:bg-gray-800 my-2 py-5">
            <legend className="text-center">Mes informations&nbsp;<span tabIndex={0} className="material-symbols-outlined">edit</span></legend>

            <div className="mx-auto p-2"> 
              <label className="text-center w-full" htmlFor="prenom">Prénom</label>
              <input className="block w-full" type="text" id="prenom" name="prenom" value="<%= famille.prenom %>" disabled />
            </div>
            <div className="mx-auto p-2">
              <label className="text-center w-full" htmlFor="nom">Nom</label>
              <input className="block w-full" type="text" id="nom" name="nom" value="<%= famille.nom %>" disabled />
            </div>
            <div className="mx-auto p-2">
              <label className="text-center w-full" htmlFor="email">Email</label>
              <input className="block w-full" type="email" id="email" name="email" value="<%= famille.identifiant_famille.email %>" disabled />
            </div>
          </fieldset>
      
          <fieldset className="font-body rounded-lg shadow dark:bg-gray-800 my-2 py-5">
            <legend className="text-center">Mon accueil&nbsp;<span tabIndex={0} className="material-symbols-outlined">edit</span></legend>

              <div className="mx-auto p-2">
                <label className="text-center w-full" htmlFor="hebergement">Type</label>
                <input className="block w-full" type="text" id="hebergement" name="hebergement" value="<%= famille.hebergement %>" disabled />
              </div>

              <div className="mx-auto p-2">
                <label className="text-center w-full" htmlFor="terrain">Terrain</label>
                <input className="block w-full" type="text" id="terrain" name="terrain" value="<%= famille.terrain %>" disabled />
              </div>

              <div className="mx-auto p-2">
                <label className="text-center w-full" htmlFor="rue">Rue</label>
                <input className="block w-full" type="text" id="rue" name="rue" value="<%= famille.rue %>" disabled />
              </div>

              <div className="mx-auto p-2">       
                <label className="text-center w-full" htmlFor="commune">Commune</label>
                <input className="block w-full" type="text" id="commune" name="commune" value="<%= famille.commune %>" disabled />
              </div>

              <div className="mx-auto p-2">
                <label className="text-center w-full" htmlFor="code_postal">Code Postal</label>
                <input className="block w-full" type="text" id="code_postal" name="code_postal" pattern="^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$" value="<%= famille.code_postal %>" disabled />
              </div>

{/*               <!-- <label htmlFor="departement">Département</label>
              <input className="block w-full" type="number" id="departement" name="departement" value="<%= famille.departement %>" disabled /> --> */}
          </fieldset>

{/*           <!-- 
          <fieldset className="font-body rounded-lg shadow dark:bg-gray-800 my-2 py-5">
            <legend className="text-center">Je peux accueillir</legend>
            <% especes.forEach(espece => { %>
              <div>
                <label className="text-center w-full" htmlFor="<%= espece.nom %>"><%= espece.nom %></label>
                <input className=# type="checkbox" id="<%= espece.nom %>" name="<%= espece.nom %>" />
              </div>
            <% }) %>
          </fieldset>
          --> */}

          <button id="validate" className="hidden w-[60%] mx-auto my-3 py-2 px-4 bg-accents1-light text-fond transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" type="submit">Valider les modifications</button>
        </form>
        <form className="flex flex-col flex-wrap content-center justify-around text-texte" action="/famille/profil/delete" method="POST" /* onSubmit={return confirm('Voulez-vous vraiment supprimer votre profil ? Cette action est irréversible !')} */>
          <button id="deleteAccount" className="w-[60%] mx-auto my-3 py-2 px-4 bg-accents2-dark text-fond transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" type="submit">Supprimer mon profil</button>
          <p className="text-center w-full">ATTENTION ! Cette suppression est définitive !</p>
        </form>
      </section>
    </div>
  </div>
</main>


  )
}

export default FosterProfile;