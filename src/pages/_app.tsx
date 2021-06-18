import { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/GlobalStyle';

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default CustomApp;
