import { fetchStarwarsCharacters } from '@/api/starwars-api';
import CharacterList from '@/components/CharacterList';
import React from 'react';

export default async function Home() {
  const starwarsCharacters = await fetchStarwarsCharacters();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='max-w-screen-lg mx-auto w-full'>
        <CharacterList starwarsCharacters={starwarsCharacters.results} />
      </div>
    </main>
  );
}
