'use client'
import Link from 'next/link';
import ShelterAnimalUpload from '@/components/Shelter/ShelterAnimalUpload';
import { IAnimal, ITag } from '@/@types/index';
import { isShelter } from '@/components/isAuth';

type AnimalShelterCardProps = {
  animal: IAnimal;
}

function AnimalShelterCard({ animal } : AnimalShelterCardProps) {
  const tagItems = animal.tags.map((tag :ITag) => (
    <p key={tag.id} className="group rounded-full block bg-accents1 text-fond text-center text-xs font-semibold py-1 px-2">
      {tag.nom}
        <span className="group-hover:block hidden z-10 bg-accents2-dark text-fond absolute px-2 py-2 text-xs rounded-b-xl rounded-tr-xl">
          {tag.description}
        </span>
    </p>
  ))

  const requestItems = animal.demandes.map((demande : typeof animal.demandes) => (
    <tr key={demande.id} className="odd:bg-accents2-light even:bg-fond odd:text-fond text-sm font-body font-semibold p-4 rounded-lg ">
      <td className="text-center p-2 rounded-lg ">{demande.nom}</td>
      <td className="text-center p-2 rounded-lg ">{demande.Demande.date_debut}</td>
      <td className="text-center p-2 rounded-lg hover:underline"><Link href={`/associations/profil/demandes/${demande.Demande.id}`}>{demande.Demande.statut_demande}</Link></td>
  </tr>
  ))

  const animalUrl = animal.images_animal[0].url;
  
  return(
    <main className="justify-self-stretch flex-1">
      <h2 className="font-grands text-3xl text-center my-2 pt-5">Mon espace association</h2>
      
      {/* <!-- Conteneur général qui contient tout le dashboard --> */}
      <div className="flex flex-col content-center justify-center mx-auto mb-4 w-[80%]">
        
        <nav className="flex flex-wrap justify-center md:justify-start">
          <ul className="flex flex-wrap-reverse gap-x-2 mx-3 justify-center font-semibold md:justify-start md:ml-10 text-xl">
            <li><Link href="/associations/profil" tabIndex={0}><button id="dashbtn-1" className="dashbtn" tabIndex={-1}>Profil</button></Link></li>
            <li><Link href="/associations/profil/demandes" tabIndex={0}><button id="dashbtn-2" className="dashbtn" tabIndex={-1}>Demandes</button></Link></li>
            <li><Link href="/associations/profil/animaux" tabIndex={0}><button id="dashbtn-3" className="dashbtn dashbtn-active" tabIndex={-1}>Animaux</button></Link></li>
          </ul>
          <div className="mx-2 grow w-[90%] h-2 bg-accents1-dark rounded-t-lg"></div>
        </nav>
        
        {/* <!-- Conteneur du sous menu et de la section --> */}
        <div className="flex flex-col bg-zoning rounded-lg">
          
          <nav className="rounded-lg">
            <ul className="rounded-t-lg flex bg-accents2 justify-stretch font-semibold text-fond text-sm md:justify-start md:pl-8">
              <li className="dashsubbtn-active rounded-tl-lg block grow text-center pl-2 border-r-2 border-r-zoning py-2 hover:underline md:grow-0 md:px-4 md:rounded-none md:border-l-2 md:border-l-zoning bor"><Link href="/associations/profil/animaux">Nos animaux</Link></li>
              <li className="block grow text-center border-r-solid border-r-2 border-r-zoning py-2 hover:underline md:grow-0 md:px-4"><Link href="/associations/profil/animaux/suivi">Suivi accueils</Link></li>
              <li className="block grow text-center pr-2 py-2 rounded-tr-lg hover:underline md:grow-0 md:px-4 md:rounded-none md:border-r-solid md:border-r-2 md:border-r-zoning"><Link href="/associations/profil/animaux/nouveau-profil">Créer un profil</Link></li>
            </ul>
          </nav>
          
          <section id="dahboard-container" className="flex justify-center flex-wrap gap-x-6 gap-y-4 p-6">
            
            {/* <!-- ANIMAL INFO --> */}
            <div className="w-60 md:w-auto">
              <h3 className="hidden md:inline font-grands text-3xl text-center my-2 pt-5 w-full">Fiche de suivi d'un animal</h3>
              <div className="flex p-6 pb-4">
                <div className="flex flex-col gap-2">
                  { animalUrl ? (
                    <img className="w-28 rounded-lg" src={`${process.env.NEXT_PUBLIC_API_URL}` + `${animalUrl}`} alt={`Photo de ${animal.nom}`} />
                  ) : (
                    <img className="w-28 rounded-lg" src="/images/animal_empty.webp" alt="Photo à venir" />
                  )}
                </div>
                    
                <div className="pl-4">
                  <p className="text-base italic leading-3">Nom</p>
                  <p className="text-base font-semibold">{animal.nom}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 px-6 gap-y-2">
                
                <div>
                  <p className="text-sm italic leading-3">Age</p>
                  <p className="text-base font-semibold">{animal.age} ans</p>
                </div>
                
                <div>
                  <p className="text-sm italic leading-3">Sexe</p>
                  <p className="text-base font-semibold">{animal.sexe}</p>
                </div>
                
                <div className="">
                  <p className="text-sm italic leading-3">Espèce</p>
                  <p className="text-base font-semibold">{animal.espece.nom}</p>
                </div>
                
                {animal.race && (
                  <div>
                    <p className="text-sm italic leading-3">Race</p>
                    <p className="text-base font-semibold">{animal.race}</p>
                  </div>
                )}
              </div>
                
              {animal.tags && (
                <div className="flex flex-wrap mt-4 px-6 gap-1">
                  {tagItems}
                </div>
              )}
              
              <div className="font-body mx-auto w-[80%] bg-zoning rounded-lg shadow dark:bg-gray-800 my-4">
                <ShelterAnimalUpload
                  animalId={ animal.id }
                />
              </div>     
            </div>
                  
            {/* CURRENT FOSTER INFOS  */}
            {animal.accueillant && ( 
              <div className="w-60 md:w-auto">
                <h3 className="font-body font-bold mb-4">Famille d'accueil</h3>
                
                <div className="px-6 mb-3 md:grid-cols-2 md:grid md:max-w-96">
                  <div className="mb-2 mt-2">
                    <p className="text-sm italic leading-3">Nom</p>
                    <p className="text-sm font-semibold">{animal.accueillant.nom}</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-sm italic leading-3">Téléphone</p>
                    <p className="text-sm font-semibold">{animal.accueillant.telephone}</p>
                  </div>
                  {/* 
                  <div className="mb-2">
                    <p className="text-sm italic leading-3">e-mail</p>
                    <p className="text-sm font-semibold">{animal.accueillant.identifiant_famille.email}</p>
                  </div>
                  */}
                  <div className="mb-2">
                    <p className="text-sm italic leading-4">Adresse</p>
                    <p className="text-sm font-semibold leading-3">{animal.accueillant.rue}</p>
                    <p className="text-sm font-semibold ">{animal.accueillant.code_postal} {animal.accueillant.commune}</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-sm italic leading-3">Pays</p>
                    <p className="text-sm font-semibold">{animal.accueillant.pays}</p>
                  </div>
                  <div>
                    <p className="text-sm italic leading-3">Hébergement</p>
                    <p className="text-sm font-semibold">{animal.accueillant.hebergement}</p>
                  </div>
                </div>
              </div>
            )}
                    
            {/* REQUEST HISTORY  */} 
            { animal.demandes.length ? (
                <div className="px-4">
                  <h3 className="font-body font-bold mb-4">Historique des demandes d'accueil</h3>
                  
                  <table className="mb-3 rounded-b-lg rounded-lg border-separate "> 
                    <thead className=" text-fond text-sm bg-accents2 font-grands font-semibold p-3 border-accents2-dark border-solid border-1">
                      <tr>
                        <th className="px-2 pt-2  border-accents2-light border-solid border-1 text-center">Famille</th>
                        <th className="px-2 pt-2  border-accents2-light border-solid border-1 text-center">Date de demande</th>
                        <th className="px-2 pt-2  border-accents2-light border-solid border-1 text-center">Statut</th>
                      </tr>
                    </thead>
                    <tbody className="rounded-lg border-separate ">
                      {requestItems}
                    </tbody>
                  </table>
                </div>    
            ) : ( <></> )}
          </section>             
        </div>
      </div>
    </main>
  )
}

export default isShelter(AnimalShelterCard)