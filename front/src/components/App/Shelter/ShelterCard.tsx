import { Association } from "../../../@types/Association";
import { Link } from "react-router-dom"

type ShelterCardProps = {
  shelter: Association;
}

const ShelterCard = ({ shelter }: ShelterCardProps) => {
  if (shelter.logo !== null) {
    return (
  <div className="bg-zoning rounded-lg shadow dark:bg-gray-800 flex flex-col">
    <div className="relative md:w-full flex justify-center items-center">
      <img className="font-body rounded-lg" src={`../../src/assets`+`${shelter.logo}`} alt={`Logo de ${shelter.nom}`} />
    </div>
    <div className="flex text-center flex-col">
      <div className="flex flex-wrap">
        <h3 className="flex-auto text-xl md:text-3xl font-semibold dark:text-gray-50">{shelter.nom}</h3>
        <hr />
        <p className="flex-none w-full mt-2 text-xs md:text-xl font-medium text-gray-500 dark:text-gray-300">Localisation : {shelter.code_postal}&nbsp;{shelter.commune}</p>
      </div>
      <div className="flex text-sm font-medium justify-center items-end">
        <Link className="my-2 bg-accents1-light text-fond w-[90%] transition ease-in duration-200 text-center text-xs md:text-2xl font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" to={`/associations/${shelter.id}`}>En savoir plus</Link>
      </div>
    </div>
  </div>
    )
  } else {
    return (
      <div className="bg-zoning rounded-lg shadow dark:bg-gray-800 flex flex-col">
      <div className="relative md:w-full flex justify-center items-center">
        <img className="font-body rounded-lg" src="../../src/assets/images/shelter_empty.webp" alt="Photo à venir" /> 
      </div>
      <div className="flex text-center flex-col">
        <div className="flex flex-wrap">
          <h3 className="flex-auto text-xl md:text-3xl font-semibold dark:text-gray-50">{shelter.nom}</h3>
          <hr />
          <p className="flex-none w-full mt-2 text-xs md:text-xl font-medium text-gray-500 dark:text-gray-300">Localisation : {shelter.code_postal}&nbsp;{shelter.commune}</p>
        </div>
        <div className="flex text-sm font-medium justify-center items-end">
          <Link className="my-2 bg-accents1-light text-fond w-[90%] transition ease-in duration-200 text-center text-xs md:text-2xl font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" to={`/associations/${shelter.id}`}>En savoir plus</Link>
        </div>
      </div>
    </div>
      )
  };
}

export default ShelterCard;
