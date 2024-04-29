import { title } from 'process';
import React from 'react';

import useOwnerProperties from '@/hooks/ressources/use-owner-properties';
import {
  Accommodation,
  PropertyInt,
  PropertyType,
} from '@/interfaces/property';
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';

interface OwnerPropertiesInt {
  ownerId: string | null;
}

export default function OwnerProperties({ ownerId }: OwnerPropertiesInt) {
  console.log(ownerId);
  const properties = useOwnerProperties(ownerId);
  console.log(properties);

  const propertiestest: PropertyInt[] = [
    {
      _id: '1',
      title: 'Spacious Apartment with a View',
      type: PropertyType.Apartment,
      livingArea: 120,
      surfaceArea: 150,
      isFurnished: true,
      address: {
        street: '123 Main St',
        city: 'Metropolis',
        postCode: '12345',
        country: 'USA',
      },
      floor: 5,
      price: 200000,
      isChargesIncluded: true,
      accommodation: Accommodation.EntireApartment,
      description:
        'Beautiful apartment with stunning views of the city skyline.',
      picture: 'apartment1',
    },
    {
      _id: '2',
      title: 'Cozy Cottage in the Woods',
      type: PropertyType.House,
      livingArea: 100,
      surfaceArea: 200,
      isFurnished: false,
      address: {
        street: '456 Forest Ave',
        city: 'Ruralville',
        postCode: '54321',
        country: 'USA',
      },
      floor: 1,
      price: 150000,
      isChargesIncluded: false,
      accommodation: Accommodation.EntireApartment,
      description: 'Charming cottage nestled in a tranquil forest setting.',
      picture: 'cottage1.jpg',
    },
  ];
  return (
    <Stack spacing={6} p={4}>
      <HStack>
        <Text fontSize='2xl' fontWeight='bold'>
          Mes propriétés :
        </Text>
      </HStack>
      <Grid templateColumns='repeat(4, 1fr)' gap={3}>
        {propertiestest &&
          propertiestest.map((property, index) => (
            <Card
              key={index}
              boxShadow='md'
              borderRadius='md'
              border='1px'
              backgroundColor='gray.100'
              borderColor='gray.200'
              transition='transform 0.3s'
              _hover={{
                transform: 'scale(1.03)',
                backgroundColor: 'gray.300',
              }}
            >
              <CardBody>
                <Image
                  src={property.picture}
                  alt='property Image'
                  borderRadius='lg'
                />
                <Stack mt='6'>
                  <Heading size='md'>Titre : {property.title}</Heading>
                  <Text>Type : {property.type}</Text>
                  <Text>{`${property.livingArea} pièces`}</Text>
                  <Text>{`Surface : ${property.surfaceArea}`} m2</Text>
                  <Text>Meublé : {property.isFurnished ? 'Oui' : 'Non'}</Text>
                  <Text>{`${property.address?.street ?? 'Non renseigné'}, ${
                    property.address?.city ?? 'non renseigné'
                  }, ${property.address?.country ?? 'non renseigné'} `}</Text>
                  <Text>étage : {property.floor}</Text>
                  <Text>
                    logement entier ou coloc : {property.accommodation}
                  </Text>
                  <Text>prix: {property.price}💲CAD/mois</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link>voir ce bien</Link>
              </CardFooter>
            </Card>
          ))}
      </Grid>
    </Stack>
  );
}
