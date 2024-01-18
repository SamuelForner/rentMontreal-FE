import { NextPage } from 'next';
import { AppProps } from 'next/app';
import React from 'react';

import OwnerContext from '@/context/OwnerContext';
import isEmpty from '@/utils/helper';
import { ChakraProvider } from '@chakra-ui/react';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [ownerToken, setOwnerToken] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    //check if we have a token if yes the user is registered
    const checkedLoggedIn = async () => {
      let token = localStorage.getItem('auth-token');
      // 1. if token
      if (token) {
        //    a) check if it is a real token
        const verifiedToken = await (
          await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/owners/isTokenValid`,
            {
              method: 'POST',
              headers: { 'x-auth-token': token },
            }
          )
        ).json();
        //    b) set token in ownertoken if true
        if (verifiedToken) {
          setOwnerToken(token);
        }
      }
      // 2. if not token
      //      a) set token in owner token as an emptyfield
      if (isEmpty(token)) {
        localStorage.setItem('auth-token', '');
        token = '';
      }
      setIsLoading(false);
    };
    checkedLoggedIn();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <OwnerContext.Provider value={{ ownerToken, setOwnerToken }}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </OwnerContext.Provider>
  );
}

export default MyApp;
