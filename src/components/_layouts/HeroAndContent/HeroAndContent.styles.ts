import styled from 'styled-components';

export const Section = styled.section<{ offset: number }>`
  margin-top: 0;

  @media (min-width: 600px) {
    margin-top: ${(props) => props.offset}px;
  }
`;
