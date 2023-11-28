'use client';

import { useRouter } from 'next/navigation';

import { PropertyType } from '@/interfaces/property';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

export default function PropertyList() {
  const propertyList = [
    {
      id: '1',
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
      id: '2',
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
      id: '3',
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
      id: '4',
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
      id: '5',
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
      id: '6',
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

  const router = useRouter();

  const handleClick = (property: PropertyType) => {
    router.push(`/property-page/${property.id}`);
  };

  return (
    <Stack spacing={6} p={4}>
      <HStack>
        <Text fontSize='2xl' fontWeight='bold'>
          Liste des propriétés :
        </Text>
        <Text>{propertyList.length} propriétés trouvées !</Text>
      </HStack>
      <Grid templateColumns='repeat(4, 1fr)' gap={3}>
        {propertyList.map((property, index) => (
          <Card key={index}>
            <CardBody>
              <Image
                src={property.picture}
                alt='property Image'
                borderRadius='lg'
              />

              <Stack mt='6'>
                <Heading size='md'>{property.title}</Heading>
                <Text>{property.type}</Text>
                <Text>{`${property.rooms} pièces`}</Text>
                <Text>{`Surface : ${property.surfaceArea}`}</Text>
                <Text>{`${property.address.street}, ${property.address.city}, ${property.address.country}`}</Text>
                <Text>{property.description}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button
                onClick={() => handleClick(property)}
                borderWidth='1px'
                borderColor='black'
              >
                Voir ce bien
              </Button>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </Stack>
  );
}
