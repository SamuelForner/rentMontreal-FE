import { title } from 'process';
import React from 'react';
import { useForm } from 'react-hook-form';

import createProperty from '@/api/property/createProperty';
import {
  Accommodation,
  PropertyInt,
  PropertyType,
} from '@/interfaces/property';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

export default function AddProperty() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    getValues,
    control,
  } = useForm<PropertyInt>({
    defaultValues: {
      isFurnished: true,
      isChargesIncluded: false,
    },
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChangeIsFurnished = (value: string) => {
    if (value === 'true') {
      setValue('isFurnished', true);
    } else if (value === 'false') {
      setValue('isFurnished', false);
    }
  };

  const handleChargesIncluded = (value: string) => {
    if (value === 'true') {
      setValue('isChargesIncluded', true);
    } else if (value === 'false') {
      setValue('isChargesIncluded', false);
    }
  };

  const onSubmit = () => {
    onOpen();
  };

  const onAddProperty = (data: PropertyInt) => {
    createProperty(data);
    reset();
    onClose();
  };

  return (
    <VStack>
      <Heading>Ajouter une propriété</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.type ? true : undefined}>
          <Text>Type de la propriété</Text>
          <Select
            placeholder='Select Property Type'
            {...register('type', {
              required: 'Le type de la propriété est requis',
            })}
          >
            <option value={PropertyType.Apartment}>Appartement</option>
            <option value={PropertyType.House}>Maison</option>
          </Select>
          <FormErrorMessage>{errors.type?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.title ? true : undefined}>
          <Text>Titre de la proprieté</Text>
          <Input
            placeholder='Title'
            {...register('title', {
              required: "Le titre de l'annonce est requis",
            })}
          />
          <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.livingArea ? true : undefined}>
          <Text>Nombre de pièce</Text>
          <Input
            placeholder='livingArea'
            type='number'
            {...register('livingArea', {
              required: 'Le nombre de pièce est requis',
              valueAsNumber: true,
            })}
          />
          <FormErrorMessage>{errors.livingArea?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.surfaceArea ? true : undefined}>
          <Text>Superficie de la propriété</Text>
          <Input
            placeholder='surfaceArea'
            type='number'
            {...register('surfaceArea', {
              required: 'La superficie du bien est requise',
              valueAsNumber: true,
            })}
          />
          <FormErrorMessage>{errors.surfaceArea?.message}</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>La propriété est elle meublée ?</FormLabel>
          <RadioGroup name='isFurnished' defaultValue='true'>
            <Stack spacing={5} direction='row'>
              <Radio
                value='true'
                colorScheme='green'
                onChange={() => handleChangeIsFurnished('true')}
              >
                Meublé
              </Radio>
              <Radio
                value='false'
                colorScheme='red'
                onChange={() => handleChangeIsFurnished('false')}
              >
                Non meublé
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl isInvalid={errors.address?.street ? true : undefined}>
          <Text>Rue</Text>
          <Input
            placeholder='street'
            {...register('address.street', { required: 'La rue est requise' })}
          />
          <FormErrorMessage>{errors.address?.street?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.address?.city ? true : false}>
          <Text>Ville</Text>
          <Input
            placeholder='city'
            {...register('address.city', { required: 'La ville est requise' })}
          />
          <FormErrorMessage>{errors.address?.city?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.address?.postCode ? true : undefined}>
          <Text>Code postal</Text>
          <Input
            placeholder='postCode'
            {...register('address.postCode', {
              required: 'Le code postal est requis',
            })}
          />
          <FormErrorMessage>
            {errors.address?.postCode?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.address?.country ? true : undefined}>
          <Text>Pays</Text>
          <Input
            placeholder='Country'
            {...register('address.country', { required: 'Le pays est requis' })}
          />
          <FormErrorMessage>
            {errors.address?.country?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.floor ? true : undefined}>
          <Text>Etage</Text>
          <Input
            placeholder='floor'
            type='number'
            {...register('floor', {
              required: "L'étage est requis",
              valueAsNumber: true,
            })}
          />
          <FormErrorMessage>{errors.floor?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.price ? true : undefined}>
          <Text>Prix</Text>
          <Input
            placeholder='price'
            type='number'
            {...register('price', {
              required: 'Le prix est requis',
              valueAsNumber: true,
            })}
          />
          <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Les charges sont elles inclues (Hydro) ?</FormLabel>
          <RadioGroup defaultValue='false' name='isChargesIncluded'>
            <Stack spacing={5} direction='row'>
              <Radio
                colorScheme='green'
                value='true'
                onChange={() => handleChargesIncluded('true')}
              >
                Inclues
              </Radio>
              <Radio
                colorScheme='red'
                value='false'
                onChange={() => handleChargesIncluded('false')}
              >
                Non Inclues
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl isInvalid={errors.accommodation ? true : undefined}>
          <Text>Type de location</Text>
          <Select
            placeholder='Select accommodation'
            {...register('accommodation', {
              required: 'Le type de location est requis',
            })}
          >
            <option value={Accommodation.EntireApartment}>
              Appartement entier
            </option>
            <option value={Accommodation.FlatShare}>Colocation</option>
          </Select>
          <FormErrorMessage>{errors.accommodation?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.description ? true : undefined}>
          <Text>Description</Text>
          <Input
            placeholder='description'
            {...register('description', {
              required: 'Brève description du bien mis en location',
            })}
          />
          <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
        </FormControl>
        <Button type='submit'>Ajouter la propriété</Button>
      </form>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajouter la propriété</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight='bold' mb='1rem'>
              Voulez vous ajouter la nouvelle propriété ?
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Annuler
            </Button>
            <Button
              variant='ghost'
              onClick={() => onAddProperty(getValues())}
              type='submit'
            >
              Confirmer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
}
