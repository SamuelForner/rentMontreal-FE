'use client';

import { useRouter } from 'next/navigation';

import usePropertiesRessource from '@/hooks/ressources/use-properties';
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
  const { properties } = usePropertiesRessource();

  const router = useRouter();

  const handleClick = (property: PropertyType) => {
    router.push(`/property-page/${property._id}`);
  };

  return (
    <Stack spacing={6} p={4}>
      <HStack>
        <Text fontSize='2xl' fontWeight='bold'>
          Liste des propriétés :
        </Text>
        <Text>{properties && properties.length} propriétés trouvées !</Text>
      </HStack>
      <Grid templateColumns='repeat(4, 1fr)' gap={3}>
        {properties &&
          properties.map((property, index) => (
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
                  <Text>{`${property.address?.street ?? 'Non renseigné'}, ${
                    property.address?.city ?? 'non renseigné'
                  }, ${property.address?.country ?? 'non renseigné'} `}</Text>
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
