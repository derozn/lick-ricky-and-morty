import { FC } from 'react';
import { HeroSection, Title, ImageWrapper, SilhouetteImage } from './PageHero.styles';

interface IPageHeroProps {
  text: string;
}

export const PageHero: FC<IPageHeroProps> = ({ text }) => (
  <HeroSection>
    <ImageWrapper>
      <SilhouetteImage />
    </ImageWrapper>
    <Title>{text}</Title>
  </HeroSection>
);
