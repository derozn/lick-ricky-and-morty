import { FC } from 'react';
import { PageHero } from '@/components/_molecules/PageHero';
import { CharacterGrid } from '@/components/_organisms/CharacterGrid';
import { HeroAndContent } from '@/components/_layouts/HeroAndContent';

interface IHomeProps {
  data: LickApi.ICharacterCore[];
}

export const Home: FC<IHomeProps> = ({ data }) => (
  <div>
    <HeroAndContent
      offset={-60}
      hero={<PageHero text="Rick and Morty" />}
      content={<CharacterGrid characters={data} />}
    />
  </div>
);
