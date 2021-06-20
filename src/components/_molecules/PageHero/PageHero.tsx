import { FC, ReactNode } from 'react';
import { HeroSection, Title, ImageWrapper, SilhouetteImage, Content } from './PageHero.styles';

interface IPageHeroProps {
  text: string;
  back?: ReactNode;
}

export const PageHero: FC<IPageHeroProps> = ({ text, back }) => (
  <HeroSection>
    <ImageWrapper>
      <SilhouetteImage />
    </ImageWrapper>
    <Content>
      <Title>{text}</Title>
      {back}
    </Content>
  </HeroSection>
);
