import { Link } from "react-router-dom";

function ShelterRequestDetails() {
  return(
    <main className="justify-self-stretch flex-1">
  <h2 className="font-grands text-3xl text-center my-2 pt-5">Mon espace association</h2>
  <div className="flex flex-col content-center justify-center mx-auto mb-4 w-[80%]"> 

    <nav className="flex flex-wrap justify-center md:justify-start">
      <ul className="flex flex-wrap-reverse gap-x-2 mx-3 justify-center font-semibold md:justify-start md:ml-10 text-xl">
        <li><Link to="/associations/profil" tabIndex={0}><button id="dashbtn-1" className="dashbtn" tabIndex={-1}>Profil</button></Link></li>
        <li><Link to="/associations/profil/demandes" tabIndex={0}><button id="dashbtn-2" className="dashbtn dashbtn-active" tabIndex={-1}>Demandes</button></Link></li>
        <li><Link to="/associations/profil/animaux" tabIndex={0}><button id="dashbtn-3" className="dashbtn" tabIndex={-1}>Animaux</button></Link></li>
      </ul>
      <div className="mx-2 grow w-[90%] h-2 bg-accents1-dark rounded-t-lg"></div>
    </nav>
    
    <div className="flex flex-col bg-zoning rounded-lg">
      
      <nav className="rounded-lg h-9">
        <ul className="rounded-t-lg flex h-9 content-center bg-accents2 justify-stretch font-semibold text-fond text-sm md:justify-start pl-2 pt-2">
          <li><Link className="flex flex-col justify-center content-center" to="/associations/profil/demandes">
            <span className="material-symbols-outlined shrink">
              arrow_back
            </span>
          </Link></li>
        </ul>
      </nav>
      
      <section className="flex flex-wrap justify-center" id="dashboard-container">
        {/* <h3 className="font-grands text-3xl text-center my-2 pt-5 w-full">Suivi de demande pour <%= animal.nom %></h3> */}
        
        {/* <!-- CONTENEUR POUR LES INFORMATIONS --> */}
        <div className="flex flex-wrap p-2 justify-center md:flex-nowrap" >
          
          {/* <!-- Partie Animal --> */}
          {/* <div className="w-full md:w-1/2">
            
            <h4 className="font-body font-bold text-center">Animal</h4>
            
            <div className="flex p-6 pb-4">
              <div className="flex flex-col gap-2">
                <% if (animal.images_animal.length > 0) { %>
                  <img className="w-28 rounded-lg" src="<%= animal.images_animal[0].url %>" alt="Photo de <%= animal.nom %>" />
                <% } else { %>
                  <img className="w-28 rounded-lg" src="../../src/assets/images/animal_empty.webp" alt="Photo à venir" />
                <% } %>
                <a className="rounded-full mx-auto block bg-accents1 text-fond w-16 text-center text-xs font-semibold py-1 hover:underline" to="/associations/profil/animaux/<%= animal.id %>">Détails</a>
              </div>
              
              <div className="pl-4">
                <p className="text-base italic leading-3">Nom</p>
                <p className="text-base font-semibold"><%= animal.nom %></p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 px-6 gap-y-2">
              
              <div>
                <p className="text-sm italic leading-3">Age</p>
                <p className="text-base font-semibold"><%= animal.age %> ans</p>
              </div>
              
              <div>
                <p className="text-sm italic leading-3">Sexe</p>
                <p className="text-base font-semibold"><%= animal.sexe %></p>
              </div>
              
              <div className="">
                <p className="text-sm italic leading-3">Espèce</p>
                <p className="text-base font-semibold"><%= animal.espece.nom %></p>
              </div>
              
              <% if (animal.race) { %>
                <div>
                  <p className="text-sm italic leading-3">Race</p>
                  <p className="text-base font-semibold"><%= animal.race %></p>
                </div>
                <% } %>
            </div>
              
              
            <% if (animal.tags) { %>
              <div className="flex flex-wrap mt-4 px-6 gap-1">
                <% animal.tags.forEach(tag => { %>
                  
                  <p className="group rounded-full block bg-accents1 text-fond text-center text-xs font-semibold py-1 px-2">
                    <%= tag.nom %>
                    <span className="group-hover:block hidden z-10 bg-accents2-dark text-fond absolute px-2 py-2 text-xs rounded-b-xl rounded-tr-xl">
                      <%= tag.description  %>
                    </span>
                  </p>
                  
                <% }) %>
              </div>
            <% } %>
                  
          </div> */}  
                
          <hr className="border-t-accents2 w-2/4 border-t-2 border-solid justify-self-center my-4 md:hidden" />
                
          {/* <!-- PARTIE FAMILLE --> */}
            {/* <div className="w-full md:w-1/2">                
            <h4 className="font-body font-bold mb-4 text-center">Famille</h4>
            
            <div className="px-6 mb-3 md:grid md:grid-cols-2 md:gap-2">
              <div className="mb-2 mt-2">
                <p className="text-sm italic leading-3">Nom</p>
                <p className="text-base font-semibold"><%= famille.nom %></p>
              </div>
              <div className="mb-2">
                <p className="text-sm italic leading-3">Téléphone</p>
                <p className="text-base font-semibold"><%= famille.telephone %></p>
              </div>
              <div className="mb-2">
                <p className="text-sm italic leading-3">e-mail</p>
                <p className="text-base font-semibold"><%= famille.identifiant_famille.email %></p>
              </div>
              <div className="mb-2">
                <p className="text-sm italic leading-4">Adresse</p>
                <p className="text-base font-semibold leading-3"><%= famille.rue %></p>
                <p className="text-base font-semibold "><%= famille.code_postal %> <%= famille.commune  %></p>
              </div>
              <div className="mb-2">
                <p className="text-sm italic leading-3">Pays</p>
                <p className="text-base font-semibold"><%= famille.pays %></p>
              </div>
              <div>
                <p className="text-sm italic leading-3">Hébergement</p>
                <p className="text-base font-semibold"><%= famille.hebergement %></p>
              </div>
            </div>
          </div> */}
        </div>
        {/* <!-- PARTIE GESTION --> */}
        <div className="w-full flex flex-row flex-wrap md:flex-nowrap justify-center gap-2 items-center">
          <h4 className="font-body font-bold text-center">Statut de la demande :</h4>
          {/* <p id="request-status" className="font-body text-center"><%= request.statut_demande %></p> */}
          <form className="w-[80%] md:w-[20%]" action="/associations/profil/demandes/<%= request.id %>/accept" method="POST">
            <button type="submit" className="bg-accents1 w-full m-3 py-2 px-4 text-fond transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">Accepter</button>
          </form>
          <form className="w-[80%] md:w-[20%]" action="/associations/profil/demandes/<%= request.id %>/deny" method="POST">
            <button type="submit" className="bg-accents2-dark w-full m-3 py-2 px-4 text-fond transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">Refuser</button>
          </form>
        </div>
      </section>
    </div>
  </div>
</main>
  )
}

export default ShelterRequestDetails;