import { Heading, Stack } from '@chakra-ui/react';

export function Header() {
  return (
    <Stack backgroundColor='blue.200' padding={4} align='center'>
      <Heading fontSize='3xl' color='white'>
        rentMontreal
      </Heading>
    </Stack>
  );
}
