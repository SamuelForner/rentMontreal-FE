import { usePathname, useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

import { Button, Heading, HStack, Stack, Text } from '@chakra-ui/react';

export default function Header() {
  const pathName = usePathname();
  const router = useRouter();

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
        {pathName !== '/' && (
          <Button
            colorScheme='whiteAlpha'
            leftIcon={<FaArrowLeft />}
            onClick={() => router.back()}
          >
            Retour
          </Button>
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
      <Stack></Stack>
    </HStack>
  );
}
