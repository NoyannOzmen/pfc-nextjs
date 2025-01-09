/* import { Link } from 'react-router-dom'; */

function AnimalDetails() {
  
  return (
    <main className="flex flex-wrap flex-col md:flex-row justify-self-stretch flex-1 w-full place-content-evenly 2xl:w-1/2 2xl:self-center">
  <section className="flex flex-col m-4 flex-1 max-[767px]:mx-4 md:ml-6 place-content-evenly">
		{/* <h2 className="font-grands text-2xl md:text-3xl text-center w-full my-6"><%= animal.nom %></h2> */}

{/* 		<!-- 		
		<% if (animal.images_animal.length > 1) { %>
		<div>
			<% for( let i = 0; i < animal.images_animal.length; i++ ) { %>
			<img src="<%= animal.images_animal[i].url %>" alt="Photo n° <%= i %> de <%= animal.nom %>">
			<% } %>
		</div>
		<% } %>
		--> */}

{/* 		<div className="font-body mx-auto w-[80%] bg-zoning rounded-lg shadow dark:bg-gray-800 my-4">
			<% if (animal.images_animal.length > 0) { %>
				<img className="mx-auto my-2"
				src="<%= animal.images_animal[0].url %>" alt="Photo de <%= animal.nom %>">
			<% } else { %>
					<img className="mx-auto my-2" src="/images/animal_empty.webp" alt="Photo à venir">
			<% } %>
		</div> */}

{/* 		<article className="font-body mx-auto w-[80%] bg-zoning rounded-lg shadow dark:bg-gray-800 my-4">
			<div className="text-center w-full py-2">
				<h3 className="font-grands text-3xl text-center my-2 w-full">A propos de <%= animal.nom %></h3>
			</div>

			<% if (animal.tags.length > 0 ) { %>
				<div className="text-center w-full py-2">
					<% animal.tags.forEach(tag => { %>
					<button className="group p-1 rounded-lg bg-accents1-dark text-fond text-center">
						<%= tag.nom %>
						<span className="group-hover:block hidden z-10 bg-accents2-dark text-fond absolute px-2 py-2 text-xs rounded-b-xl rounded-tr-xl">
							<%= tag.description  %>
						</span>
					</button>
					<% }) %>
				</div>
			<% } %>
			
			<div className="text-center w-full py-2">
				<p className="font-body text-texte">Nom : <%= animal.nom %></p>
				<p className="font-body text-texte">Age : <%= animal.age %>&nbsp;ans</p>
				<p className="font-body text-texte">Sexe : <%= animal.sexe %></p>
			</div>
			<div className="text-center w-full py-2">
				<p className="font-body text-texte">Espèce : <%= animal.espece.nom %></p>
				<% if (animal.race) { %>
				<p className="font-body text-texte">Race : <%= animal.race %></p>
				<% } %>
				<p className="font-body text-texte">Couleur : <%= animal.couleur %></p>
			</div>
			<div className="text-center w-full py-2">
				<p className="font-body text-texte">Statut : <%= animal.statut %></p>
			</div>

			<div className="text-center w-full py-2">
				<p className="font-body text-texte">Son petit truc en plus :<br><%= animal.description %></p>
			</div>
			<% if (locals.role==='famille') { %>
				<div className="text-center w-full py-2">
					<% if(locals.message.erreur){ %>
						<div>
							<p className="font-grands font-base text-accents1 text-center"><%= message.erreur %></p>
						</div>
					<% } %>
					<% if(locals.message.succes){ %>
						<div>
							<p className="font-grands font-base text-accents1 text-center"><%= message.succes%></p>
						</div>
					<% } %>
					<form action="/animaux/<%= animal.id %>/faire-une-demande" method="POST">
					<button type="submit" className="mx-auto my-3 py-2 px-6 bg-accents1-light text-fond transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">Faire une demande</button>
					</form>
				</div>
			<% } %>
		</article> */}

	</section>
	
 	{/* <!-- Mini association profile --> */}
{/* 	<section className="flex flex-col md:my-8 flex-none  md:max-w-[50%] max-[767px]:mx-4 md:mr-6 md:mt-32 py-6">
		<article className="font-body mx-auto w-full bg-zoning rounded-lg shadow dark:bg-gray-800 my-4">
			<h3 className="font-grands text-3xl text-center my-2 pt-5 w-full"><%= animal.nom %><br>vous attend chez<br /><%= animal.refuge.nom %></h3>


			<div className="font-body mx-auto w-[80%] rounded-lg my-4">
				<% if (animal.refuge.images_association) { %>
					<img className="mx-auto" src="<%= animal.refuge.images_association[0].url %>" alt="Logo de <%= animal.refuge.nom %>">
				<% } else { %>
				<img src="../..src/assets/images/Animal_empty.webp" alt="Logo de <%= animal.refuge.nom %> bientôt visible">
				<% } %>
			</div>

			<div className="text-center w-full py-2">
				<p className="font-body text-texte">Adresse : <%= animal.refuge.rue %>,<br /><%= animal.refuge.code_postal %>,&nbsp;<%= animal.refuge.commune%>,&nbsp;<%= animal.refuge.pays %></p>
				<p className="font-body text-texte">Téléphone : <%= animal.refuge.telephone %></p>
				<p className="font-body text-texte">E-mail : <%= animal.refuge.identifiant_association.email %></p>
				<p className="hidden md:block font-body text-texte"><%= animal.refuge.identifiant_association.description %></p>
			</div>
				
			<div className="text-center w-full py-2">
				<a className="w-[60%] mx-auto my-3 py-2 px-4 bg-accents1-light text-fond transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" href="/associations/<%= animal.refuge.id %>">En savoir plus</a>
			</div>
		</article>
	</section> */}
	
	{/* <!-- Insert Carousel here --> */ }

	<section className="p-4 py-6 block">
		<h2 className="font-grands text-3xl text-center my-2">Ils vous attendent de patte ferme !</h2>

		{/* <!-- Carousel of ONE --> */}
		<section id="animal-carousel"
		className="md:hidden relative mx-auto h-auto w-[90%] bg-zoning rounded-lg shadow dark:bg-gray-800">

			<button
			className="absolute top-0 start-0 z-1 flex items-center justify-center h-full pl-2 cursor-pointer group focus:outline-none  size-10 opacity-75"
			type="button" id="previous" aria-label="Précédent" tabIndex={0}><img src="../..src/assets/icons/left.svg" alt="" /></button>

			<div className="h-auto mx-auto rounded-lg p-4">
{/* 				<% animals.forEach(animal=> { %>
					<div className="hidden carousel-img">
						<div className="flex bg-fond rounded-lg shadow dark:bg-gray-800 flex-col md:flex-col mx-auto my-2 w-[75%] p-4">
							<div className="w-full md:w-full flex justify-center items-center">
								<% if (animal.images_animal.length> 0) { %>
								<img className="object-contain md:h-full rounded-lg" src="<%= animal.images_animal[0].url %>"
								alt="Photo de <%= animal.nom %>">
								<% } else { %>
									<img className="object-contain md:h-full rounded-lg" src="/images/animal_empty.webp" alt="Photo à venir">
								<% } %>
								</div>
								<div className="flex-auto text-center">
									<div className="flex flex-wrap my-2">
										<h3 className="flex-auto text-xl font-semibold dark:text-gray-50">
											<%= animal.nom %>
										</h3>
										<h4 className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
											<%= animal.espece.nom %>
										</h4>
										<hr>
										<p className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">Age : <%=
											animal.age %>
										</p>
										<p className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">Localisation : <%=
											animal.departement %>
										</p>
									</div>
									<div className="flex mb-4 text-sm font-medium">
										<a className="py-2 px-4 bg-accents1-light text-fond w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
										href="/animaux/<%= animal.id %>">Découvrir</a>
									</div>
								</div>
							</div>
					</div>
				<% }) %> */}
			</div>

			<button
			className="absolute top-0 end-0 z-1 flex items-center justify-center h-full pr-2 cursor-pointer group focus:outline-none size-10 opacity-75"
			type="button" id="next" aria-label="Suivant" tabIndex={0}><img src="../..src/assets/icons/right.svg" alt="" /></button>

		</section>

		{/* <!-- Carousel of THREE --> */}
		<section id="animal-carousel3"
		className=" flex flex-row max-[767px]:hidden relative mx-auto w-[90%] h-auto bg-zoning rounded-lg shadow dark:bg-gray-800">

			<button
			className="absolute top-0 start-0 z-1 flex items-center justify-center h-full pl-2 cursor-pointer group focus:outline-none size-10 opacity-75"
			type="button" id="previous3" aria-label="Précédent" tabIndex={0}><img src="../..src/assets/icons/left.svg" alt="" /></button>

			<div className="h-auto w-auto flex rounded-lg my-6 gap-4 px-8">
{/* 				<% animals.forEach(animal=> { %>
					<div className="hidden carousel3-img place-self-center">
						<div className="flex bg-zoning rounded-lg shadow dark:bg-gray-800 flex-row md:flex-col p-4">
							<div className="w-full md:w-full flex justify-center items-center">
								<% if (animal.images_animal.length> 0) { %>
									<img className="object-contain w-[80%] h-48 md:h-full rounded-lg" src="<%= animal.images_animal[0].url %>"
									alt="Photo de <%= animal.nom %>">
								<% } else { %>
									<img className="object-contain w-[80%] h-48 md:h-full rounded-lg" src="../..src/assets/images/animal_empty.webp"
									alt="Photo à venir" />
								<% } %>
							</div>
							<div className="flex-auto text-center">
								<div className="flex flex-wrap my-2">
									<h3 className="flex-auto text-xl font-semibold dark:text-gray-50">
										<%= animal.nom %>
									</h3>
									<h4 className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
										<%= animal.espece.nom %>
									</h4>
									<hr>
									<p className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">Age : <%=
										animal.age %>
									</p>
									<p className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">Localisation : <%=
										animal.refuge.code_postal %>
									</p>
								</div>
								<div className="flex mb-4 text-sm font-medium">
									<a className="py-2 px-4 bg-accents1-light text-fond w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
									href="/animaux/<%= animal.id %>">Découvrir</a>
								</div>
							</div>
						</div>
					</div>
				<% }) %> */}
			</div>

			<button
			className="absolute top-0 end-0 z-1 flex items-center justify-center h-full pr-2 cursor-pointer group focus:outline-none size-10 opacity-75"
			type="button" id="next3" aria-label="Suivant" tabIndex={0}><img src="../..src/assets/icons/right.svg" alt="" /></button>

		</section>

	</section>

  {/* <script async src="/utils/carousel.js"></script> */}

</main>


  )
};

export default AnimalDetails;