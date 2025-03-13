'use client'
import { useState } from 'react';
import { useUserContext } from '@/contexts/UserContext';

type AnimalRequestProps = {
  animalId: string;
}

const AnimalRequest = ({ animalId }: AnimalRequestProps) => {
  const auth = useUserContext();

  const [ requestInfos, setRequestInfos ] = useState({
		animalId: '',
		familleId: '',
	})

	const [userMessage, setUserMessage] = useState(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
		setUserMessage(null)

    const userId = auth.user?.accueillant.id;

    setRequestInfos({
      familleId: userId as string,
      animalId: animalId as string,
    });

		try {
			const response = await fetch
				(process.env.NEXT_PUBLIC_API_URL + `/animaux/${animalId}/faire-une-demande`,
				{
					method: 'POST',
					headers: { "Content-type" : "application/json" },
					body: JSON.stringify(requestInfos),
				}
			);

			const res = await response.json();
			setUserMessage(res.message)
		} catch (error) {
			console.error(error);
		}
  }

  return (
    <>
    { auth.user?.accueillant && (
      <div className="text-center w-full py-2">
        {userMessage &&
          <p className="font-grands font-base text-accents1 text-center">{userMessage}</p>
        }
        <form onSubmit={handleSubmit}>
        <button type="submit" className="mx-auto my-3 py-2 px-6 bg-accents1-light text-fond transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">Faire une demande</button>
        </form>
      </div>
    )}
    </>
  )
}

export default AnimalRequest;