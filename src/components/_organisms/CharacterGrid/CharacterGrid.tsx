import { FC } from 'react';
import { CharacterCard } from '@/components/_molecules/CharacterCard';

interface ICharacterGridProps {
  characters: LickApi.ICharacterCore[];
}

export const CharacterGrid: FC<ICharacterGridProps> = ({ characters }) => (
  <section>
    <ul>
      {characters.map((character) => (
        <li key={character.id}>
          <CharacterCard {...character} />
        </li>
      ))}
    </ul>
  </section>
);
