import styled from 'styled-components';
import Silhouette from '@/assets/silhouette.svg';

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

export const Title = styled.h1`
  position: relative;
  font-family: var(--secondary-font);
  font-weight: 400;
  color: var(--pacificBlue);
  text-shadow: 2px 0px 2px var(--lightGreen);
`;

export const ImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
`;

export const SilhouetteImage = styled(Silhouette)`
  display: inline-block;
  overflow: hidden;
  fill: var(--cultured);
`;
