import usePropertyRessource from '@/hooks/ressources/use-property';
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
  const { property } = usePropertyRessource(propertyId);

  return (
    <Stack>
      <Heading>{property?.title}</Heading>
      <HStack>
        <Box boxSize='md'>
          <Image alt='image' src={property?.picture} />
        </Box>
        <VStack>
          <Text>Nombre de chambre : {property?.rooms}</Text>
          <Text>Superficie en m2 : {property?.surfaceArea}</Text>
          <Text>
            {property?.address.street} {property?.address.city}
            {property?.address.postCode} {property?.address.country}
          </Text>
          <Text>{property?.description}</Text>
        </VStack>
      </HStack>
    </Stack>
  );
}
