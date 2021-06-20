/* This isn't an exhaustive list of all typographys since we only use a couple for this test. */

import { css } from 'styled-components';

export const typography = css`
  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 8rem;
    }

    h2 {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 2rem;
    }
  }
`;
