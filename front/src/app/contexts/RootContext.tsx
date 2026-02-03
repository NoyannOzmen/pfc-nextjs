'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { IAnimal, IEspece, ITag, IAssociation } from '@/@types/index';

type RootContextType = {
  animals: IAnimal[];
  species: IEspece[];
  tags: ITag[];
  shelters: IAssociation[];
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const RootContext = createContext<RootContextType | null>(null);

/* const getInitialAnimalState = () => {
  const animals = sessionStorage.getItem('animals');
  return animals ? JSON.parse(animals) : null
}

const getInitialSpeciesState = () => {
  const species = sessionStorage.getItem('species');
  return species ? JSON.parse(species) : null
}

const getInitialTagState = () => {
  const tags = sessionStorage.getItem('tags');
  return tags ? JSON.parse(tags) : null
}

const getInitialShelterState = () => {
  const shelters = sessionStorage.getItem('shelters');
  return shelters ? JSON.parse(shelters) : null
} */

export default function RootContextProvider({ children }: UserContextProviderProps) {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [species, setSpecies] = useState<IEspece[]>([]);
  const [tags, setTags] = useState<ITag[]>([]);
  const [shelters, setShelters] = useState<IAssociation[]>([]);

  useEffect(() => {
    sessionStorage.setItem('animals', JSON.stringify(animals));
    sessionStorage.setItem('species', JSON.stringify(species));
    sessionStorage.setItem('tags', JSON.stringify(tags));
    sessionStorage.setItem('shelters', JSON.stringify(shelters));
  }, [animals, species, tags, shelters]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const BaseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(BaseUrl + `/animaux`);
        const data = await response.json();
        setAnimals(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchSpecies = async () => {
      try {
        const BaseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(BaseUrl + `/especes`);
        const data = await response.json();
        setSpecies(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchTags = async () => {
      try {
        const BaseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(BaseUrl + `/tags`);
        const data = await response.json();
        setTags(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchShelters = async () => {
      try {
        const BaseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(BaseUrl + `/associations`);
        const data = await response.json();
        setShelters(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSpecies();
    fetchAnimals();
    fetchTags();
    fetchShelters();
  }, []);

  return (
    <RootContext.Provider value={{ animals, shelters, tags, species }}>
      {children}
    </RootContext.Provider>
  );
}

export function useRootContext() {
  const context = useContext(RootContext);

  if (!context) {
    throw new Error('useRootContext doit être utilisé dans RootContextProvider');
  }

  return context;
}
