import {  Animal } from "../../../@types/Animal";
import { Link } from "react-router-dom"

type AnimalCardProps = {
  animal: Animal;
}

const AnimalCarouselCardThree = ({ animal }: AnimalCardProps) => {
    return (
        <div className="hidden carousel3-img place-self-center">
          <div className="flex bg-zoning rounded-lg shadow dark:bg-gray-800 flex-row md:flex-col p-4">
            <div className="w-full md:w-full flex justify-center items-center">
            <img className="object-contain w-[80%] h-48 md:h-full rounded-lg" src={`${animal.photo}`} alt={`Photo de ${animal.nom}`} />
            </div>

            <div className="flex-auto text-center">
              <div className="flex flex-wrap my-2">
              <h3 className="flex-auto text-xl font-semibold dark:text-gray-50">{animal.nom}</h3>
              <h4 className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">{animal.espece.nom}</h4>
              <hr />
              <p className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">Age : {animal.age}</p>
              <p className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">Localisation : {animal.refuge.code_postal}</p>
              </div>

              <div className="flex mb-4 text-sm font-medium">
              <Link className="py-2 px-4 bg-accents1-light text-fond w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              to={`/animaux/${animal.id}`}>Découvrir</Link>
              </div>
            </div>
          </div>
        </div>
    )
};

export default AnimalCarouselCardThree;