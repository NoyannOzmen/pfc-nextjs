import { IAnimal } from '@/@types/index';
import AnimalShelterCard from '@/components/Shelter/AnimalShelterCard';

export async function generateStaticParams() {
  const animals = await fetch(process.env.NEXT_PUBLIC_API_URL + `/animaux`).then(res => res.json());

  return animals.map((animal: IAnimal) => ({
    id: animal.id.toString(),
  }));
}

export default async function ShelterResidentDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const animal = await fetch(process.env.NEXT_PUBLIC_API_URL + '/animaux/' + Number(id)).then(res =>
    res.json()
  );

  return (
    <>
      <AnimalShelterCard animal={animal} />
    </>
  );
}
