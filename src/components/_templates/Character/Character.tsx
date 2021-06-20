import { FC } from 'react';
import { PageHero } from '@/components/_molecules/PageHero';
import { BackToListing } from '@/components/_atoms/BackToListing';
import { CharacterDetails } from '@/components/_organisms/CharacterDetails';
import { HeroAndContent } from '@/components/_layouts/HeroAndContent';

interface ICharacterProps {
  data: LickApi.ICharacter;
}

export const Character: FC<ICharacterProps> = ({ data }) => (
  <div>
    <HeroAndContent
      offset={-160}
      hero={<PageHero text="Rick and Morty" back={<BackToListing />} />}
      content={<CharacterDetails character={data} />}
    />
  </div>
);
