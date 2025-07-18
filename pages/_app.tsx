import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Mouad Ziroudi" />
        <meta name="keywords" content="product designer, UX designer, UI designer, Morocco, portfolio, design", />
      </Head>
      <Component {...pageProps} />
    </>
  );
}