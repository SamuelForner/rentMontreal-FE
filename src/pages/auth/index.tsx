import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React from 'react';

import Header from '@/components/global/header';
import OwnerContext from '@/context/OwnerContext';
import { Box, Button, Center, Heading } from '@chakra-ui/react';

const AuthPage = (path?: { resolvedUrl: string }) => {
  const { ownerToken } = React.useContext(OwnerContext);
  const isConnected = ownerToken !== undefined && ownerToken !== null;

  return (
    <>
      <Header isConnected={isConnected} path={path} />
      <Center h='100vh'>
        <Box p={8} borderWidth={1} borderRadius={8} boxShadow='lg'>
          <Heading as='h1' mb={8} textAlign='center'>
            {"Choisissez votre type d'utilisateur :"}
          </Heading>
          <Center>
            <Link href='/auth/owner/auth'>
              <Button colorScheme='blue' mr={4}>
                Propriétaire
              </Button>
            </Link>
            <Link href='/auth/tenant/auth'>
              <Button colorScheme='green' mr={4}>
                Locataire
              </Button>
            </Link>
          </Center>
        </Box>
      </Center>
    </>
  );
};

export default AuthPage;

export const getServerSideProps: GetServerSideProps = async ({
  resolvedUrl,
}) => {
  return {
    props: {
      resolvedUrl,
    },
  };
};
