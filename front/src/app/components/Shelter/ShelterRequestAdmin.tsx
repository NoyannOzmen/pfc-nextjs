'use client';
import { useState } from 'react';
import { IDemande } from '@/@types/index';

type ShelterRequestAdminProps = {
  demande: IDemande;
};

export default function ShelterRequestAdmin({ demande }: ShelterRequestAdminProps) {
  const [displayedRequest, setDisplayedRequest] = useState(demande);

  const [userMessage, setUserMessage] = useState(null);

  async function acceptRequest(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + `/associations/profil/demandes/${demande.id}/accept`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('site')}`,
          },
          body: '',
        }
      );

      if (!response.ok) {
        switch (response.status) {
          case 401: {
            const { message } = await response.json();
            throw new Error(message);
          }

          case 404:
            throw new Error("La page demandée n'existe pas.");

          case 500:
            throw new Error('Une erreur est survenue, merci de ré-essayer ultérieurement.');

          default:
            throw new Error(`HTTP ${response.status}`);
        }
      }

      const data = await response.json();
      let newState = Object.assign({}, displayedRequest);
      newState = data;
      setDisplayedRequest(newState);
    } catch (error) {
      console.error(error);
    }
  }

  async function denyRequest(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setUserMessage(null);

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + `/associations/profil/demandes/${demande.id}/deny`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('site')}`,
          },
          body: '',
        }
      );

      if (!response.ok) {
        const { message } = await response.json();
        setUserMessage(message);
      }

      const data = await response.json();
      let newState = Object.assign({}, displayedRequest);
      newState = data;
      setDisplayedRequest(newState);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-full flex flex-row flex-wrap md:flex-nowrap justify-center gap-2 items-center">
      {userMessage && (
        <div>
          <p className="font-grands font-base text-accents1 text-center">{userMessage}</p>
        </div>
      )}
      <h4 className="font-body font-bold text-center">Statut de la demande :</h4>
      <p id="request-status" className="font-body text-center">
        {displayedRequest.statut_demande}
      </p>
      <form className="w-[80%] md:w-[20%]" onSubmit={acceptRequest}>
        <button
          type="submit"
          className="bg-accents1 w-full m-3 py-2 px-4 text-fond transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          Accepter
        </button>
      </form>
      <form className="w-[80%] md:w-[20%]" onSubmit={denyRequest}>
        <button
          type="submit"
          className="bg-accents2-dark w-full m-3 py-2 px-4 text-fond transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          Refuser
        </button>
      </form>
    </div>
  );
}
