import { IDemande } from "@/@types/index";
import AnimalRequestCard from "@/components/Shelter/AnimalRequestCard";

export async function generateStaticParams() {
  const demandes = await fetch(process.env.NEXT_PUBLIC_API_URL + `/demandes`).then((res) => res.json())
 
  return demandes.map((demande : IDemande) => ({
			id: demande.id.toString()
  }))
}

export default async function ShelterRequestDetails({
  params,
}: {
  params: Promise<{ id: string}>
}) {
  const { id } = await params;
  const demande = await fetch(process.env.NEXT_PUBLIC_API_URL + '/demandes/' + Number(id)).then((res) => res.json())

  const animal = await fetch(process.env.NEXT_PUBLIC_API_URL + `/animaux/` + Number(demande.animal_id)).then((res) => res.json())

  const famille = await fetch(process.env.NEXT_PUBLIC_API_URL + `/famille/` + Number(demande.famille_id)).then((res) => res.json())

  return (
    <>
      <AnimalRequestCard
        animal = {animal}
        famille = {famille}
        demande = {demande}
      />
    </>
  )
}

