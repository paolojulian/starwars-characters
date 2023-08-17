import React, { FunctionComponent } from 'react';

export type CharacterCardProps = {
  name: string;
  height: number;
  gender: string;
};

const CharacterCard: FunctionComponent<CharacterCardProps> = ({
  name,
  height,
  gender,
}) => {
  return (
    <div className='flex flex-col space-y-2'>
      <div className='w-full h-[300px] bg-slate-500 rounded-xl animate-pulse'></div>

      <div>
        <div className='bg-blue-400 rounded-xl w-fit px-2 py-1 text-sm mb-2'>
          <span>{gender}</span>
          {/* create a gender component to handle multiple gender */}
        </div>

        <h3 className='text-xl font-bold'>{name}</h3>

        <span className='text-sm text-slate-500'>
          {height} cm
          {/* maybe add some function to handle multiple display */}
        </span>
      </div>
    </div>
  );
};

export default CharacterCard;
