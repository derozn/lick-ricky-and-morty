import { FC } from 'react';
import { PageHero } from '@/components/_molecules/PageHero';

interface IHomeProps {
  data: LickApi.ICharacterCore[];
}

export const Home: FC<IHomeProps> = () => (
  <div>
    <PageHero text="Rick and Morty" />
  </div>
);
