'use client';
import NextLink from 'next/link';

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
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';

interface PropertyListProps {
  filters: {
    roomNumber?: number | undefined;
    propertyType?: PropertyType | PropertyType[] | undefined;
    surfaceAreaMin?: number | undefined;
    surfaceAreaMax?: number | undefined;
    isFurnished?: boolean | undefined;
  };
}

export default function PropertyList(filters: PropertyListProps) {
  const { properties } = usePropertiesRessource(filters);

  // const router = useRouter();

  // const handleClick = (property: PropertyInt) => {
  //   if (property._id) {
  //     router.push(`/property-page/${property._id}`);
  //   }
  // };

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
            <Card
              key={index}
              boxShadow='md'
              borderRadius='md'
              border='1px'
              backgroundColor='gray.100'
              borderColor='gray.200'
              transition='transform 0.3s'
              _hover={{ transform: 'scale(1.03)', backgroundColor: 'gray.300' }}
            >
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
                  <Text>Meublé : {property.isFurnished ? 'Oui' : 'Non'}</Text>
                  <Text>{`${property.address?.street ?? 'Non renseigné'}, ${
                    property.address?.city ?? 'non renseigné'
                  }, ${property.address?.country ?? 'non renseigné'} `}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                {/* <Button
                  onClick={() => handleClick(property)}
                  borderWidth='1px'
                  borderColor='black'
                >
                  Voir ce bien
                </Button> */}
                <Button>
                  <Link href={`/property-page/${property._id}`} as={NextLink}>
                    voir ce bien
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
      </Grid>
    </Stack>
  );
}
