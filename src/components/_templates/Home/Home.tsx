import { FC } from 'react';
import { PageHero } from '@/components/_molecules/PageHero';
import { CharacterGrid } from '@/components/_organisms/CharacterGrid';

interface IHomeProps {
  data: LickApi.ICharacterCore[];
}

export const Home: FC<IHomeProps> = ({ data }) => (
  <div>
    <PageHero text="Rick and Morty" />
    <CharacterGrid characters={data} />
  </div>
);
