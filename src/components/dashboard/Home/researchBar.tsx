import React, { ChangeEvent } from 'react';

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
  VStack,
} from '@chakra-ui/react';

interface ResearchBarProps {
  onFiltersChange: (filters: {
    roomNumber?: number | undefined;
    propertyType?: PropertyType | PropertyType[] | undefined;
    surfaceAreaMin?: number | undefined;
    surfaceAreaMax?: number | undefined;
    isFurnished?: boolean | undefined;
  }) => void;
}

export function ResearchBar({
  onFiltersChange: onFilterChange,
}: ResearchBarProps) {
  const [roomNumber, setRoomNumber] = React.useState<
    number | string | undefined
  >();

  const [propertyType, setPropertyType] = React.useState<
    PropertyType | PropertyType[] | undefined
  >();

  const [surfaceArea, setSurfaceArea] = React.useState<{
    surfaceAreaMin?: string;
    surfaceAreaMax?: string;
  }>({
    surfaceAreaMin: '',
    surfaceAreaMax: '',
  });

  const [isFurnished, setIsFurnished] = React.useState<boolean | undefined>(
    undefined
  );

  const handleRoomNumber = (value: number | string | undefined) => {
    setRoomNumber(value != '' ? Number(value) : '');
    onFilterChange({ roomNumber: value != '' ? Number(value) : undefined });
  };

  const handlePropertyType = (
    value: PropertyType | PropertyType[] | undefined
  ) => {
    setPropertyType(value);
    onFilterChange({ propertyType: value ? value : undefined });
  };

  const onSurfaceAreaChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSurfaceArea((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSurfaceAreaChange = () => {
    onFilterChange({
      surfaceAreaMin: Number(surfaceArea.surfaceAreaMin),
      surfaceAreaMax: Number(surfaceArea.surfaceAreaMax),
    });
  };

  const handleDeleteSurfaceArea = () => {
    setSurfaceArea({ surfaceAreaMin: '', surfaceAreaMax: '' });
    onFilterChange({
      surfaceAreaMin: undefined,
      surfaceAreaMax: undefined,
    });
  };

  const handleIsFurnished = (value: boolean | undefined) => {
    setIsFurnished(value);
    onFilterChange({ isFurnished: value });
  };

  return (
    <Stack spacing={4} padding={4}>
      <Input
        placeholder='Votre recherche'
        borderRadius='md'
        borderWidth='1px'
        borderColor='gray.300'
        padding={2}
        name='recherche'
      />
      <HStack>
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
                name='numberInput'
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
          <Menu closeOnSelect={false} autoSelect={false}>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Superficie
            </MenuButton>
            <MenuList>
              <Stack>
                <VStack>
                  <Input
                    type='number'
                    placeholder='Superficie min'
                    name='surfaceAreaMin'
                    onChange={onSurfaceAreaChange}
                    value={surfaceArea.surfaceAreaMin}
                  />
                  <Input
                    type='number'
                    placeholder='Superficie max'
                    name='surfaceAreaMax'
                    onChange={onSurfaceAreaChange}
                    value={surfaceArea.surfaceAreaMax}
                  />
                </VStack>
                <HStack spacing={2}>
                  <Button colorScheme='blue' onClick={handleSurfaceAreaChange}>
                    Valider
                  </Button>
                  <Button onClick={handleDeleteSurfaceArea} colorScheme='pink'>
                    Supprimer le filtre
                  </Button>
                </HStack>
              </Stack>
            </MenuList>
          </Menu>
        </Stack>
        <Stack>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              {isFurnished === undefined && 'meublé/non meublé'}
              {isFurnished && 'Meublé'}
              {!isFurnished && 'Non meublé'}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleIsFurnished(true)}>
                Meublé
              </MenuItem>
              <MenuItem onClick={() => handleIsFurnished(false)}>
                Non meublé
              </MenuItem>
              <MenuItem bg='pink' onClick={() => handleIsFurnished(undefined)}>
                Supprimer le filtre
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </HStack>
    </Stack>
  );
}
