'use client';
import { useState } from 'react';

type ShelterAnimalUploadProps = {
  animalId: string;
};

export default function ShelterAnimalUpload({ animalId }: ShelterAnimalUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [userMessage, setUserMessage] = useState(null);

  async function sendFile(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setUserMessage(null);

    if (file) {
      const pictureId = JSON.stringify(animalId);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('animal_id', pictureId);

      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/upload/photo`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('site')}`,
          },
          body: formData,
        });

        const res = await response.json();
        setUserMessage(res.message);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <form onSubmit={sendFile}>
      {userMessage && (
        <div>
          <p className="font-grands font-base text-accents1 text-center">{userMessage}</p>
        </div>
      )}
      <div className="flex flex-col">
        <label htmlFor="file">Importer une image</label>
        <input
          onChange={e => setFile(e.target.files?.[0] || null)}
          id="file"
          type="file"
          name="file"
          required
        />
      </div>
      <div className="w-full">
        <input
          type="submit"
          value="Importer"
          className="hover:bg-accents1-dark rounded-full hover:underline bg-accents1 text-center font-grands text-fond font-semibold text-xs py-0.5 px-4"
        />
      </div>
    </form>
  );
}
