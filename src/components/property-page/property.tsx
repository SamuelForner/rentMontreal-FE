import { Property } from '@/interfaces/property';
import {
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function Property() {
  const data = {
    title: 'Bel appartement',
    type: 'Appartement',
    rooms: 2,
    surfaceArea: '10m2',
    address: {
      street: '2355 rue Davidson',
      city: 'Paris',
      postCode: '1',
      country: 'France',
    },
    description:
      "Je vous montre ce bel appartement mais je n'en ai rien à foutre la vérité ",
    picture:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  };
  return (
    <Stack>
      <Heading>{data.title}</Heading>
      <HStack>
        <Box boxSize='md'>
          <Image alt='image' src={data.picture} />
        </Box>
        <VStack>
          <Text>Nombre de chambre : {data.rooms}</Text>
          <Text>Superficie en m2 : {data.surfaceArea}</Text>
          <Text>
            {data.address.street} {data.address.city} {data.address.postCode}{' '}
            {data.address.country}
          </Text>
          <Text>{data.description}</Text>
        </VStack>
      </HStack>
    </Stack>
  );
}
