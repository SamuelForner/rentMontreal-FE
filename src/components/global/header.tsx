import Link from 'next/link';

import useOwnerInfo from '@/hooks/ressources/use-owner';
import { isNotEmpty } from '@/utils/helper';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Avatar, Button, Heading, HStack, Stack, Text } from '@chakra-ui/react';

interface HeaderProps {
  path?: {
    resolvedUrl: string;
  };
  isConnected: boolean;
}

export default function Header({ path, isConnected }: HeaderProps) {
  const { ownerInfo } = useOwnerInfo();

  return (
    <HStack
      background='linear-gradient(90deg, #36D1DC 0%, #5B86E5 100%)'
      padding={4}
      align='center'
      borderBottom='1px solid white'
      justifyContent='space-between'
      boxShadow='0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      position='relative'
    >
      <Stack spacing={2} direction='row' align='center'>
        {path && isNotEmpty(path) && (
          <Link href='/' color='whiteAlpha'>
            <Button
              colorScheme='whiteAlpha'
              leftIcon={<ArrowBackIcon />}
            ></Button>
          </Link>
        )}
      </Stack>
      <Stack>
        <Heading
          fontSize={['2xl', '3xl', '4xl']}
          color='white'
          fontFamily='Dancing Script'
          letterSpacing='tight'
          textAlign='center'
        >
          <span role='img' aria-label='maison'>
            🏡
          </span>{' '}
          rentMontreal{' '}
          <span role='img' aria-label='clés'>
            🔑
          </span>
        </Heading>
        <Text fontSize='sm' color='white' textAlign='center'>
          Explorez une variété de propriétés à Montréal
        </Text>
      </Stack>
      <Stack>
        {path?.resolvedUrl !== '/auth/owner/auth/' &&
          (isConnected && ownerInfo ? (
            <Stack direction='row' align='center'>
              <Text fontSize='sm' mr='2'>
                Bonjour {`${ownerInfo.firstName} ${ownerInfo.lastName}`} !
              </Text>
              <Link color='whiteAlpha' href='/auth/owner/auth'>
                <Avatar
                  name={`${ownerInfo.firstName} ${ownerInfo.lastName}`}
                  size='sm'
                />
              </Link>
            </Stack>
          ) : (
            <Link color='teal.500' href='/auth/owner/auth'>
              Se connecter / S inscrire
            </Link>
          ))}
      </Stack>
    </HStack>
  );
}
