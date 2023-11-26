import { Button, Heading, HStack, Stack } from '@chakra-ui/react';

export function Header() {
  return (
    <HStack
      backgroundColor='blue.200'
      padding={4}
      align='center'
      borderWidth='1px'
      borderColor='black'
      justifyContent='space-between'
    >
      <Stack borderWidth='1px' borderColor='black'>
        <Button>return</Button>
      </Stack>
      <Stack borderWidth='1px' borderColor='black'>
        <Heading fontSize='3xl' color='white'>
          rentMontreal
        </Heading>
      </Stack>
      <Stack borderWidth='1px' borderColor='black'></Stack>
    </HStack>
  );
}
