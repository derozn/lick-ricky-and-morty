import { FC } from 'react';
import { CharacterCard } from '@/components/_molecules/CharacterCard';
import { Grid } from './CharacterGrid.styles';

interface ICharacterGridProps {
  characters: LickApi.ICharacterCore[];
}

export const CharacterGrid: FC<ICharacterGridProps> = ({ characters }) => (
  <section>
    <Grid>
      {characters.map((character) => (
        <li key={character.id}>
          <CharacterCard {...character} />
        </li>
      ))}
    </Grid>
  </section>
);
