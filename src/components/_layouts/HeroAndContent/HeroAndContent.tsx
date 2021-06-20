import { FC, ReactNode } from 'react';
import { Section } from './HeroAndContent.styles';

interface IHeroAndContentProps {
  hero: ReactNode;
  content: ReactNode;
  offset?: number;
}

export const HeroAndContent: FC<IHeroAndContentProps> = ({ hero, content, offset = 0 }) => (
  <>
    {hero}
    <Section offset={offset}>{content}</Section>
  </>
);
