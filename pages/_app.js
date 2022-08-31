import { ChakraProvider } from '@chakra-ui/react';
import Router from 'next/router';
import Layout from '../components/Layout';

import Head from 'next/head';
import '../styles/globals.css';
import '../styles/nprogress.css';
import nProgress from 'nprogress';

function MyApp({ Component, pageProps }) {
  nProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => {
    nProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    nProgress.done();
  });
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
