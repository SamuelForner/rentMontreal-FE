import { Input, Stack } from '@chakra-ui/react';

export function ResearchBar() {
  return (
    <Stack spacing={4} padding={4}>
      <Input
        placeholder='Votre recherche'
        borderRadius='md'
        borderWidth='1px'
        borderColor='gray.300'
        padding={2}
      />
    </Stack>
  );
}
