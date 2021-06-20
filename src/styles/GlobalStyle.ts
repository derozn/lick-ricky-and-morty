import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { typography } from './typography';
import { variables } from './variables';
import { fonts } from './fonts';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${variables}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    background: var(--white);
  }

  body {
    font-size: 1.6rem;
  }

  ${fonts}
  ${typography}
`;
