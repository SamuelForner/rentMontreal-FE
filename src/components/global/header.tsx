import { usePathname, useRouter } from 'next/navigation';

import { Button, Heading, HStack, Stack } from '@chakra-ui/react';

export function Header() {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <HStack
      backgroundColor='blue.200'
      padding={4}
      align='center'
      borderWidth='1px'
      borderColor='black'
      justifyContent='space-between'
    >
      {pathName !== '/' ? (
        <Stack borderWidth='1px' borderColor='black'>
          <Button onClick={() => router.back()}>return</Button>
        </Stack>
      ) : (
        <Stack></Stack>
      )}

      <Stack borderWidth='1px' borderColor='black'>
        <Heading fontSize='3xl' color='white'>
          rentMontreal
        </Heading>
      </Stack>
      <Stack borderWidth='1px' borderColor='black'></Stack>
    </HStack>
  );
}
