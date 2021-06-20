import styled from 'styled-components';

export const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  display: inline-block;
  background-color: var(--raisinBlack);
  font-size: var(--body-text);
  font-family: var(--primary-font);
  color: var(--cultured);
  padding: 1.2rem;

  transition: background-color 0.25s ease;

  &:hover {
    background-color: var(--blackCoral);
  }
`;
