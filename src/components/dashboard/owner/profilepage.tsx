import { useRouter } from 'next/router';
import React from 'react';

import OwnerContext from '@/context/OwnerContext';
import useOwnerInfo from '@/hooks/ressources/use-owner';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function ProfilePage() {
  const { ownerInfo, isLoading } = useOwnerInfo();
  const { setOwnerToken } = React.useContext(OwnerContext);
  const router = useRouter();

  const handleLogout = () => {
    setOwnerToken('');
    localStorage.removeItem('auth-token');
    localStorage.removeItem('owner-id');
    router.push('/auth/owner/auth');
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!ownerInfo) {
    return <div>Failed to fetch owner information.</div>;
  }
  return (
    <Flex p={8} justify='center' align='center'>
      <VStack spacing={8} align='stretch' w='400px'>
        <Avatar size='2xl' />
        <Heading as='h1' size='lg' textAlign='center'>
          {ownerInfo.firstName} {ownerInfo.lastName}
        </Heading>
        <Text fontSize='lg' textAlign='center'>
          {ownerInfo.email}
        </Text>
        <Box bg='gray.100' p={4} borderRadius='md'>
          <Text fontSize='sm' textAlign='center'>
            Membre depuis {new Date(ownerInfo.createdAt).getFullYear()}
          </Text>
        </Box>
        <Spacer />
        <Button colorScheme='blue' size='lg' onClick={handleLogout}>
          Se déconnecter
        </Button>
      </VStack>
    </Flex>
  );
}
