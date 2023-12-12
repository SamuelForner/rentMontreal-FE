import React from 'react';

import { PropertyType } from '@/interfaces/property';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
} from '@chakra-ui/react';

interface ResearchBarProps {
  onFilterChange: (filters: { roomNumber: number | undefined }) => void;
}

export function ResearchBar({ onFilterChange }: ResearchBarProps) {
  // liste de filtre : nombre de chambre/superficie/adresse : rue;ville;pays
  const [roomNumber, setRoomNumber] = React.useState<
    number | string | undefined
  >();

  const [propertyType, setPropertyType] = React.useState<
    PropertyType | PropertyType[] | undefined
  >();

  const handleRoomNumber = (value: number | string | undefined) => {
    setRoomNumber(value != '' ? Number(value) : '');
    onFilterChange({ roomNumber: value != '' ? Number(value) : undefined });
  };

  const handlePropertyType = (
    value: PropertyType | PropertyType[] | undefined
  ) => {
    setPropertyType(value);
  };

  return (
    <Stack spacing={4} padding={4}>
      <Input
        placeholder='Votre recherche'
        borderRadius='md'
        borderWidth='1px'
        borderColor='gray.300'
        padding={2}
      />
      <HStack>
        <Stack>
          <Menu closeOnSelect={false} autoSelect={false}>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              {roomNumber
                ? `Nombre de chambre : ${roomNumber}`
                : 'Nombre de chambre'}
            </MenuButton>
            <MenuList>
              <NumberInput
                size='xs'
                value={roomNumber}
                onChange={handleRoomNumber}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </MenuList>
          </Menu>
        </Stack>
        <Stack>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              {propertyType === PropertyType.Apartment
                ? 'Appartement'
                : propertyType === PropertyType.House
                ? 'Maison'
                : 'Type de bien'}
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => handlePropertyType(PropertyType.Apartment)}
              >
                Appartement
              </MenuItem>
              <MenuItem
                value={PropertyType.House}
                onClick={() => handlePropertyType(PropertyType.House)}
              >
                Maison
              </MenuItem>
              <MenuItem
                value={PropertyType.House}
                onClick={() => handlePropertyType(undefined)}
              >
                Retirer le filtre
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </HStack>
    </Stack>
  );
}
