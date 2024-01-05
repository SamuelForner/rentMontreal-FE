import React, { ChangeEvent } from 'react';

import { Accommodation, PropertyType } from '@/interfaces/property';
import { Filters } from '@/pages/home/home';
import isEmpty, { isNotEmpty } from '@/utils/helper';
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
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

interface ResearchBarProps {
  onFiltersChange: (filters: Filters) => void;
}

export default function HomePageFilters({
  onFiltersChange: onFilterChange,
}: ResearchBarProps) {
  const [livingArea, setLivingArea] = React.useState<
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

  const [floor, setFloor] = React.useState<{
    floorMin?: string;
    floorMax?: string;
  }>({
    floorMin: '',
    floorMax: '',
  });

  const [accommodation, setAccommodation] = React.useState<
    Accommodation | undefined
  >();

  const [price, setPrice] = React.useState<(number | string | undefined)[]>([
    500, 1200,
  ]);

  const [isPriceFiltered, setIsPriceFiltered] = React.useState<boolean>(false);

  const handleLivingArea = (value: number | string | undefined) => {
    setLivingArea(value != '' ? Number(value) : '');
    onFilterChange({ livingArea: value != '' ? Number(value) : undefined });
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
      surfaceAreaMin: isNotEmpty(surfaceArea.surfaceAreaMin)
        ? Number(surfaceArea.surfaceAreaMin)
        : undefined,
      surfaceAreaMax: isNotEmpty(surfaceArea.surfaceAreaMax)
        ? Number(surfaceArea.surfaceAreaMax)
        : undefined,
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

  const onFloorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFloor((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFloorChange = () => {
    onFilterChange({
      floorMin: isNotEmpty(floor.floorMin) ? Number(floor.floorMin) : undefined,
      floorMax: isNotEmpty(floor.floorMax) ? Number(floor.floorMax) : undefined,
    });
  };

  const handleDeleteFloor = () => {
    setFloor({
      floorMin: '',
      floorMax: '',
    });
    onFilterChange({
      floorMin: undefined,
      floorMax: undefined,
    });
  };

  const handleAccommodationChange = (
    accommodation: Accommodation | undefined
  ) => {
    setAccommodation(accommodation);
    onFilterChange({ accommodation: accommodation });
  };

  const onPriceChange = (value: string | number[], i?: any) => {
    if (typeof value === 'string') {
      let newPrice = [...price];
      if (isNotEmpty(value)) {
        newPrice[i] = value;
        setPrice(newPrice);
      }
      if (isEmpty(value)) {
        newPrice[i] = '';
        setPrice(newPrice);
      }
    } else {
      setPrice(value);
    }
  };

  const handlePriceChange = () => {
    if (isNotEmpty(price[0]) ?? isNotEmpty(price[1])) {
      setIsPriceFiltered(true);
    }
    onFilterChange({
      priceMin: isNotEmpty(price[0]) ? Number(price[0]) : undefined,
      priceMax: isNotEmpty(price[1]) ? Number(price[1]) : undefined,
    });
  };

  const handleDeletePrice = () => {
    setPrice(['', '']);
    setIsPriceFiltered(false);
    onFilterChange({
      priceMin: undefined,
      priceMax: undefined,
    });
  };

  return (
    <HStack spacing={4} flexWrap='wrap'>
      <Stack>
        <Menu>
          <MenuButton
            bg={propertyType ? 'green.200' : 'gray.100'}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
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
            <MenuItem onClick={() => handlePropertyType(PropertyType.House)}>
              Maison
            </MenuItem>
            <MenuItem onClick={() => handlePropertyType(undefined)}>
              Retirer le filtre
            </MenuItem>
          </MenuList>
        </Menu>
      </Stack>
      <Stack>
        <Menu closeOnSelect={false} autoSelect={false}>
          <MenuButton
            bg={livingArea ? 'green.200' : 'gray.100'}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            {livingArea ? `Nombre de pièce : ${livingArea}` : 'Nombre de pièce'}
          </MenuButton>
          <MenuList>
            <NumberInput
              size='xs'
              value={livingArea}
              onChange={handleLivingArea}
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
          <MenuButton
            bg={
              surfaceArea.surfaceAreaMin || surfaceArea.surfaceAreaMax
                ? 'green.200'
                : 'gray.100'
            }
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            {isEmpty(surfaceArea.surfaceAreaMin) &&
              isEmpty(surfaceArea.surfaceAreaMax) &&
              'Superficie'}{' '}
            {isNotEmpty(surfaceArea.surfaceAreaMin) &&
              `Superficie min: ${surfaceArea.surfaceAreaMin}`}{' '}
            {isNotEmpty(surfaceArea.surfaceAreaMax) &&
              `Superficie max: ${surfaceArea.surfaceAreaMax}`}{' '}
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
          <MenuButton
            bg={isFurnished !== undefined ? 'green.200' : 'gray.100'}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            {isFurnished === undefined && 'meublé/non meublé'}
            {isFurnished && 'Meublé'}
            {isFurnished === false && 'Non meublé'}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleIsFurnished(true)}>Meublé</MenuItem>
            <MenuItem onClick={() => handleIsFurnished(false)}>
              Non meublé
            </MenuItem>
            <MenuItem bg='pink' onClick={() => handleIsFurnished(undefined)}>
              Supprimer le filtre
            </MenuItem>
          </MenuList>
        </Menu>
      </Stack>
      <Stack>
        <Menu>
          <MenuButton
            bg={floor.floorMin || floor.floorMax ? 'green.200' : 'gray.100'}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            {isEmpty(floor.floorMin) && isEmpty(floor.floorMax) && 'Etage'}{' '}
            {isNotEmpty(floor.floorMin) && `Etage min: ${floor.floorMin}`}{' '}
            {isNotEmpty(floor.floorMax) && `Etage max: ${floor.floorMax}`}{' '}
          </MenuButton>
          <MenuList>
            <Stack>
              <Text fontSize='xs'>Le rez de chaussée est à la valeur 0</Text>
              <VStack>
                <Input
                  type='number'
                  placeholder='Etage min'
                  onChange={onFloorChange}
                  name='floorMin'
                  value={floor.floorMin}
                />
                <Input
                  type='number'
                  placeholder='Etage max'
                  onChange={onFloorChange}
                  name='floorMax'
                  value={floor.floorMax}
                />
              </VStack>
              <HStack spacing={2}>
                <Button colorScheme='blue' onClick={handleFloorChange}>
                  Valider
                </Button>
                <Button colorScheme='pink' onClick={handleDeleteFloor}>
                  Supprimer le filtre
                </Button>
              </HStack>
            </Stack>
          </MenuList>
        </Menu>
      </Stack>
      <Stack>
        <Menu>
          <MenuButton
            bg={accommodation ? 'green.200' : 'gray.100'}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            {accommodation === Accommodation.EntireApartment
              ? 'Logement entier'
              : accommodation === Accommodation.FlatShare
              ? 'Colocation'
              : 'Logement entier/colocation'}
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={() =>
                handleAccommodationChange(Accommodation.EntireApartment)
              }
            >
              Logement entier
            </MenuItem>
            <MenuItem
              onClick={() => handleAccommodationChange(Accommodation.FlatShare)}
            >
              Colocation
            </MenuItem>
            <MenuItem onClick={() => handleAccommodationChange(undefined)}>
              Retirer le filtre
            </MenuItem>
          </MenuList>
        </Menu>
      </Stack>
      <Stack>
        <Menu>
          <MenuButton
            bg={isPriceFiltered ? 'green.200' : 'gray.100'}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Prix
          </MenuButton>
          <MenuList>
            <VStack spacing={2}>
              <HStack>
                <Stack>
                  <Text>Prix min : </Text>
                  <NumberInput
                    size='xs'
                    name='minPrice'
                    placeholder='prix min'
                    value={price[0]}
                    onChange={(value, i) => onPriceChange(value, (i = 0))}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
                <Stack>
                  <Text>Prix max : </Text>
                  <NumberInput
                    size='xs'
                    name='maxPrice'
                    placeholder='prix max'
                    value={price[1]}
                    onChange={(value, i) => onPriceChange(value, (i = 1))}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
              </HStack>
              <RangeSlider
                onChange={onPriceChange}
                defaultValue={price as number[]}
                value={price as number[]}
                max={2000}
                focusThumbOnChange={false}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={6} index={0}>
                  {price[0]}
                </RangeSliderThumb>
                <RangeSliderThumb boxSize={6} index={1}>
                  {price[1]}
                </RangeSliderThumb>
              </RangeSlider>
              <HStack spacing={2}>
                <Button colorScheme='blue' onClick={handlePriceChange}>
                  Valider
                </Button>
                <Button colorScheme='pink' onClick={handleDeletePrice}>
                  Supprimer le filtre
                </Button>
              </HStack>
            </VStack>
          </MenuList>
        </Menu>
      </Stack>
    </HStack>
  );
}
