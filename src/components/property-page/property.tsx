import usePropertyRessource from '@/hooks/ressources/use-property';
import { PropertyType } from '@/interfaces/property';
import {
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

interface PropertyDescriptionProps {
  propertyId: string | string[] | undefined;
}

export default function Property({ propertyId }: PropertyDescriptionProps) {
  const propertyList: PropertyType[] = [
    {
      _id: '1',
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
      _id: '2',
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
      _id: '3',
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
      _id: '4',
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
      _id: '5',
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
      _id: '6',
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

  // const { propertyy } = usePropertyRessource(propertyId);
  // console.log('property', propertyy);
  // console.log('propertyId', propertyId);

  const property = propertyList.find((property) => property._id === propertyId);

  return (
    <Stack>
      <Heading>{property && property.title}</Heading>
      <HStack>
        <Box boxSize='md'>
          <Image alt='image' src={property && property.picture} />
        </Box>
        <VStack>
          <Text>Nombre de chambre : {property && property.rooms}</Text>
          <Text>Superficie en m2 : {property && property.surfaceArea}</Text>
          <Text>
            {property && property.address.street}{' '}
            {property && property.address.city}
            {property && property.address.postCode}{' '}
            {property && property.address.country}
          </Text>
          <Text>{property && property.description}</Text>
        </VStack>
      </HStack>
    </Stack>
  );
}
