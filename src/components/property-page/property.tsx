import { Property } from '@/interfaces/property';
import { Box, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react';

export default function Property() {
  const propertyList = [
    {
      id: 1,
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
    },
    {
      id: 2,
      title: 'moche maison',
      type: 'Maison',
      rooms: 3,
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
    },

    {
      id: 3,
      title: 'moche maison',
      type: 'Maison',
      rooms: 3,
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
    },

    {
      id: 4,
      title: 'moche maison',
      type: 'Maison',
      rooms: 3,
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
    },

    {
      id: 5,
      title: 'moche maison',
      type: 'Maison',
      rooms: 3,
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
    },

    {
      id: 6,
      title: 'moche maison',
      type: 'Maison',
      rooms: 3,
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
    },
  ];
  return (
    <Stack>
      <Heading>propertyList.title</Heading>
      <HStack>
        <Box boxSize='md'>
          {/* <Image alt='image' src={propertyList.picture} /> */}
        </Box>
        <VStack>
          <Text>Nombre de chambre : propertyList.rooms</Text>
          <Text>Superficie en m2 : propertyList.surfaceArea</Text>
          <Text>
            propertyList.address.street propertyList.address.city{' '}
            propertyList.address.postCode propertyList.address.country
          </Text>
          <Text>propertyList.description</Text>
        </VStack>
      </HStack>
    </Stack>
  );
}
