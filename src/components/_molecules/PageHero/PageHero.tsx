import { FC } from 'react';
import { HeroSection, Title } from './PageHero.styles';

interface IPageHeroProps {
  text: string;
}

export const PageHero: FC<IPageHeroProps> = ({ text }) => (
  <HeroSection>
    <Title>{text}</Title>
  </HeroSection>
);
