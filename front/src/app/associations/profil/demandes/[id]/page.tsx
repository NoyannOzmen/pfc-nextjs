import Link from 'next/link';
import ShelterRequestAdmin from '@/components/Shelter/ShelterRequestAdmin';
import { IDemande, ITag } from '@/@types/index';

export async function generateStaticParams() {
  const demandes = await fetch(process.env.NEXT_PUBLIC_API_URL + `/demandes`).then((res) => res.json())
 
  return demandes.map((demande : IDemande) => ({
			id: demande.id.toString()
  }))
}

async function ShelterRequestDetails({
  params,
}: {
  params: Promise<{ id: string}>
}) {
  const { id } = await params;
  const demande = await fetch(process.env.NEXT_PUBLIC_API_URL + '/demandes/' + Number(id)).then((res) => res.json())

  const animal = await fetch(process.env.NEXT_PUBLIC_API_URL + `/animaux/` + Number(demande.animal_id)).then((res) => res.json())

  const famille = await fetch(process.env.NEXT_PUBLIC_API_URL + `/famille/` + Number(demande.famille_id)).then((res) => res.json())

  const tagItems = animal.tags.map((tag :ITag) => (
    <p key={tag.id} className="group rounded-full block bg-accents1 text-fond text-center text-xs font-semibold py-1 px-2">
      {tag.nom}
      <span className="group-hover:block hidden z-10 bg-accents2-dark text-fond absolute px-2 py-2 text-xs rounded-b-xl rounded-tr-xl">
        {tag.description}
      </span>
    </p>
  ))

  return(
    <main className="justify-self-stretch flex-1">
        <h2 className="font-grands text-3xl text-center my-2 pt-5">Mon espace association</h2>
      <div className="flex flex-col content-center justify-center mx-auto mb-4 w-[80%]"> 

        <nav className="flex flex-wrap justify-center md:justify-start">
          <ul className="flex flex-wrap-reverse gap-x-2 mx-3 justify-center font-semibold md:justify-start md:ml-10 text-xl">
            <li><Link href="/associations/profil" tabIndex={0}><button id="dashbtn-1" className="dashbtn" tabIndex={-1}>Profil</button></Link></li>
            <li><Link href="/associations/profil/demandes" tabIndex={0}><button id="dashbtn-2" className="dashbtn dashbtn-active" tabIndex={-1}>Demandes</button></Link></li>
            <li><Link href="/associations/profil/animaux" tabIndex={0}><button id="dashbtn-3" className="dashbtn" tabIndex={-1}>Animaux</button></Link></li>
          </ul>
          <div className="mx-2 grow w-[90%] h-2 bg-accents1-dark rounded-t-lg"></div>
        </nav>
        
        <div className="flex flex-col bg-zoning rounded-lg">
          
          <nav className="rounded-lg h-9">
            <ul className="rounded-t-lg flex h-9 content-center bg-accents2 justify-stretch font-semibold text-fond text-sm md:justify-start pl-2 pt-2">
              <li><Link className="flex flex-col justify-center content-center" href="/associations/profil/demandes">
                <span className="material-symbols-outlined shrink">
                  arrow_back
                </span>
              </Link></li>
            </ul>
          </nav>
          
          <section className="flex flex-wrap justify-center" id="dashboard-container">
            <h3 className="font-grands text-3xl text-center my-2 pt-5 w-full">Suivi de demande pour {animal.nom}</h3>
            
            {/* WRAPPER */}
            <div className="flex flex-wrap p-2 justify-center md:flex-nowrap" >
              
              {/* ANIMAL */}
              <div className="w-full md:w-1/2">
                
                <h4 className="font-body font-bold text-center">Animal</h4>
                
                <div className="flex p-6 pb-4">
                  <div className="flex flex-col gap-2">
                  { animal.images_animal[0].url ? (
                    <img className="w-28 rounded-lg" src={`${process.env.NEXT_PUBLIC_API_URL}` + `${animal.images_animal[0].url}`} alt={`Photo de ${animal.nom}`} />
                  ) : (
                    <img className="w-28 rounded-lg" src="/images/animal_empty.webp" alt="Photo à venir" />
                  )}
                    <Link className="rounded-full mx-auto block bg-accents1 text-fond w-16 text-center text-xs font-semibold py-1 hover:underline" href={`/associations/profil/animaux/${animal.id}`} >Détails</Link>
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
                  
                  { animal.race &&
                    <div>
                      <p className="text-sm italic leading-3">Race</p>
                      <p className="text-base font-semibold">{animal.race}</p>
                    </div>
                  }
                </div>
                  
                  
                {tagItems &&
                  <div className="flex flex-wrap mt-4 px-6 gap-1">
                      {tagItems}
                  </div>
                }
                      
              </div>  
                    
              <hr className="border-t-accents2 w-2/4 border-t-2 border-solid justify-self-center my-4 md:hidden" />
                    
              {/* FOSTER */}
              <div className="w-full md:w-1/2">                
                <h4 className="font-body font-bold mb-4 text-center">Famille</h4>
                
                <div className="px-6 mb-3 md:grid md:grid-cols-2 md:gap-2">
                  <div className="mb-2 mt-2">
                    <p className="text-sm italic leading-3">Nom</p>
                    <p className="text-base font-semibold">{famille.nom}</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-sm italic leading-3">Téléphone</p>
                    <p className="text-base font-semibold">{famille.telephone}</p>
                  </div>
                  {/* <div className="mb-2">
                    <p className="text-sm italic leading-3">e-mail</p>
                    <p className="text-base font-semibold">{famille.identifiant_famille.email}</p>
                  </div> */}
                  <div className="mb-2">
                    <p className="text-sm italic leading-4">Adresse</p>
                    <p className="text-base font-semibold leading-3">{famille.rue}</p>
                    <p className="text-base font-semibold ">{famille.code_postal} {famille.commune }</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-sm italic leading-3">Pays</p>
                    <p className="text-base font-semibold">{famille.pays}</p>
                  </div>
                  <div>
                    <p className="text-sm italic leading-3">Hébergement</p>
                    <p className="text-base font-semibold">{famille.hebergement}</p>
                  </div>
                </div>
              </div> 
            </div>
            {/* <!-- PARTIE GESTION --> */}
            <ShelterRequestAdmin
              demande={demande}
            />
          </section>
        </div>
      </div>
    </main>
  )
}

export default ShelterRequestDetails;