import styled from 'styled-components';

export const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  @media (min-width: 600px) {
    gap: 4rem;
  }

  @media (min-width: 990px) {
    gap: 6rem;
  }
`;
