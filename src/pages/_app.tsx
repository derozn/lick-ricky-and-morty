import { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { DefaultLayout } from '@/components/_layouts/DefaultLayout';

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  </>
);

export default CustomApp;
