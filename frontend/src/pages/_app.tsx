import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import PrivacyPolicy from '../components/PrivacyPolicy';
import https from 'https';
import axios from 'axios';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { theme } from '../styles/theme';
import React, { useEffect } from 'react';
import * as gtag from '../lib/gtag';
import { useRouter } from 'next/router';
import { VLibras } from '../components/Header/VLibras';
import { MainContentLink } from '../components/Header/MainContentLink';

if (typeof window === 'undefined') React.useLayoutEffect = React.useEffect;

axios.defaults.httpsAgent = new https.Agent({
  rejectUnauthorized: false
})

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageView(url);
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events])

  return (
    <ChakraProvider theme={theme}>
      <MainContentLink />
      <SidebarDrawerProvider>
        <PrivacyPolicy />
        <VLibras />
        <Component {...pageProps}/>
      </SidebarDrawerProvider>
      
    </ChakraProvider>
  );
}

export default MyApp;
