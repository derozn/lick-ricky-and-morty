import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 4rem;
`;

export const Bio = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const Title = styled.h2`
  position: relative;
  font-family: var(--primary-font);
  font-weight: 400;
  color: var(--raisinBlack);
  margin: 0 0 2rem 0;
`;

export const Attribute = styled.p`
  font-family: var(--primary-font);
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ContentSection = styled.div`
  margin-top: 4rem;
  text-align: center;

  @media (min-width: 600px) {
    text-align: initial;
  }
`;
