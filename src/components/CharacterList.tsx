'use client';
import { StarwarsCharacter } from '@/types/starwars';
import React, { FunctionComponent, useState } from 'react';
import CharacterCard from './CharacterCard';
import TextInput from './forms/TextInput';

export type CharacterListProps = {
  starwarsCharacters: StarwarsCharacter[];
};

const MemoizedCharacterCard = React.memo(CharacterCard);

const CharacterList: FunctionComponent<CharacterListProps> = ({
  starwarsCharacters,
}) => {
  const [search, setSearch] = useState('');

  const filteredCharacters = React.useMemo(
    () =>
      starwarsCharacters.filter((character) =>
        character.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      ),
    [search, starwarsCharacters]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className='flex flex-row justify-between mb-4'>
        <h1 className='font-bold text-2xl'>Starwars Characters</h1>
        <TextInput onChange={handleChange} placeholder='Search...' />
      </div>
      <div className='grid grid-cols-3 gap-2'>
        {filteredCharacters.map((item, i) => (
          <MemoizedCharacterCard
            key={i}
            name={item.name}
            height={Number(item.height)}
            gender={item.gender}
          />
        ))}
      </div>
    </>
  );
};

export default CharacterList;
