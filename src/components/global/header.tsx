import Link from 'next/link';

import { isNotEmpty } from '@/utils/helper';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button, Heading, HStack, Stack, Text } from '@chakra-ui/react';

interface HeaderProps {
  path?: string;
}

export default function Header({ path }: HeaderProps) {
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
      <Stack></Stack>
    </HStack>
  );
}
