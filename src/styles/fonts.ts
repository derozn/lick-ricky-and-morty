import { css } from 'styled-components';

export const fonts = css`
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Montserrat Light'), local('Montserrat-Light'),
      url('/fonts/Montserrat-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Montserrat Regular'), local('Montserrat-Regular'),
      url('/fonts/Montserrat-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Schwifty';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('get_schwifty'), local('Get-Schwifty'),
      url('/fonts/get_schwifty.ttf') format('truetype');
  }
`;
