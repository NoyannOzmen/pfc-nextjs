import Link from 'next/link';
import Carousel from '@/components/Animal/Carousel';
import AnimalRequest from '@/components/Animal/AnimalRequest';
import { IAnimal, ITag } from '@/@types/index';

export async function generateStaticParams() {
  const animals = await fetch(process.env.NEXT_PUBLIC_API_URL + `/animaux`).then((res) => res.json())
 
  return animals.map((animal : IAnimal) => ({
			id: animal.id.toString()
  }))
}

export default async function AnimalDetails({
  params,
}: {
  params: Promise<{ id: string}>
}) {
	const { id } = await params;
	const animal = await fetch(process.env.NEXT_PUBLIC_API_URL + '/animaux/' + Number(id)).then((res) => res.json())

	const animalUrl = animal.images_animal[0].url;
	const shelterUrl = animal.refuge.images_association[0].url;

	const tagItems = animal.tags?.map((tag: ITag) => (
		<button key={tag.id} className="group p-1 rounded-lg bg-accents1-dark text-fond text-center">
					{tag.nom}
					<span className="group-hover:block hidden z-10 bg-accents2-dark text-fond absolute px-2 py-2 text-xs rounded-b-xl rounded-tr-xl">
						{tag.description}
					</span>
		</button>
  ))

  return (
    <main className="flex flex-wrap flex-col md:flex-row justify-self-stretch flex-1 w-full place-content-evenly 2xl:w-1/2 2xl:self-center">
  <section className="flex flex-col m-4 flex-1 max-[767px]:mx-4 md:ml-6 place-content-evenly">
		<h2 className="font-grands text-2xl md:text-3xl text-center w-full my-6">{animal.nom}</h2>

		<div className="font-body mx-auto w-[80%] bg-zoning rounded-lg shadow dark:bg-gray-800 my-4">
			{ animalUrl ? (
				<img className="mx-auto my-2"
				src={`${process.env.NEXT_PUBLIC_API_URL}` + `${animalUrl}`} alt={`Photo de ${animal.nom}`} />
			) : (
				<img className="mx-auto my-2" src="/images/animal_empty.webp" alt="Photo à venir" />
			)}
		</div>
		<article className="font-body mx-auto w-[80%] bg-zoning rounded-lg shadow dark:bg-gray-800 my-4">
			<div className="text-center w-full py-2">
				<h3 className="font-grands text-3xl text-center my-2 w-full">A propos de {animal.nom}</h3>
			</div>

			
			<div className="text-center w-full py-2">
				{tagItems}
			</div>
			
			<div className="text-center w-full py-2">
				<p className="font-body text-texte">Nom : {animal.nom}</p>
				<p className="font-body text-texte">Age : {animal.age}&nbsp;ans</p>
				<p className="font-body text-texte">Sexe : {animal.sexe}</p>
			</div>
			<div className="text-center w-full py-2">
				<p className="font-body text-texte">Espèce : {animal.espece.nom}</p>
				{animal.race && (
				<p className="font-body text-texte">Race : {animal.race}</p>
				)}
				<p className="font-body text-texte">Couleur : {animal.couleur}</p>
			</div>
			<div className="text-center w-full py-2">
				<p className="font-body text-texte">Statut : {animal.statut}</p>
			</div>

			<div className="text-center w-full py-2">
				<p className="font-body text-texte">Son petit truc en plus :<br />{animal.description}</p>
			</div>
			<AnimalRequest
				animalId={ animal.id }
			/>
		</article>

	</section>
	
 	{/* Mini association profile */}
	<section className="flex flex-col md:my-8 flex-none  md:max-w-[50%] max-[767px]:mx-4 md:mr-6 md:mt-32 py-6">
		<article className="font-body mx-auto w-full bg-zoning rounded-lg shadow dark:bg-gray-800 my-4">
			<h3 className="font-grands text-3xl text-center my-2 pt-5 w-full">{animal.nom}<br />vous attend chez<br />{animal.refuge.nom}</h3>


			<div className="font-body mx-auto w-[80%] rounded-lg my-4">
 				{ shelterUrl ? (
					<img className="mx-auto"
					src={`${process.env.NEXT_PUBLIC_API_URL}` + `${shelterUrl}`} alt={`Logo de ${animal.refuge.nom}`}></img>
				) : (
					<img className="mx-auto" src="/images/shelter_empty.webp" alt={`Logo de ${animal.refuge.nom} bientôt visible`} />
				)}
			</div>

			<div className="text-center w-full py-2">
				<p className="font-body text-texte">Adresse : {animal.refuge.rue},<br />{animal.refuge.code_postal},&nbsp;{animal.refuge.commune},&nbsp;{animal.refuge.pays}</p>
				<p className="font-body text-texte">Téléphone : {animal.refuge.telephone}</p>
				{ animal.refuge.site && <p className="font-body text-texte">E-mail : {animal.refuge.site}</p> }
				{ animal.refuge.description && <p className="font-body text-texte">{animal.refuge.description}</p> }
			</div>
				
			<div className="text-center w-full py-2">
				<Link className="w-[60%] mx-auto my-3 py-2 px-4 bg-accents1-light text-fond transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" href={`/associations/${animal.refuge.id}`}>En savoir plus</Link>
			</div>
		</article>
	</section>
	
	{/* Carousels */ }

	<section className="p-4 py-6 block">
		<h2 className="font-grands text-3xl text-center my-2">Ils vous attendent de patte ferme !</h2>
			<Carousel />
	</section>

</main>


  )
}