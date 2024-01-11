import React from 'react';

import { PropertyInt } from '@/interfaces/property';
import {
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

interface PropertyPageProps {
  property: PropertyInt;
}

export default function Property({ property }: PropertyPageProps) {
  return (
    <Stack>
      <Heading>{property?.title}</Heading>
      <HStack>
        <Box boxSize='md'>
          <Image alt='image' src={property?.picture} />
        </Box>
        <VStack>
          <Text>Type : {property.type}</Text>
          <Text>Nombre de pièce : {property?.livingArea}</Text>
          <Text>Superficie en m2 : {property?.surfaceArea}</Text>
          <Text>Meublé : {property?.isFurnished ? 'oui' : 'non'}</Text>
          <Text>
            {property?.address.street} {property?.address.city}
            {property?.address.postCode} {property?.address.country}
          </Text>
          <Text>floor : {property.floor}</Text>
          <Text>price : {property.price}</Text>
          <Text>
            Charges incluses : {property.isChargesIncluded ? 'oui' : 'non'}
          </Text>
          <Text>accommodation : {property.accommodation}</Text>
          <Text>{property?.description}</Text>
        </VStack>
      </HStack>
    </Stack>
  );
}
