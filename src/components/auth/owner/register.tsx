import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import OwnerContext from '@/context/OwnerContext';
import { Iowner } from '@/interfaces/owner';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

export default function Register() {
  const { setOwnerToken } = React.useContext(OwnerContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iowner>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
    },
  });

  const onSubmit: SubmitHandler<Iowner> = async (data) => {
    try {
      const newUser = {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
        phoneNumber: data.phoneNumber,
      };

      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/owners/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const signInRes = await (
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/owners/signin`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            email: newUser.email,
            password: newUser.password,
          }),
        })
      ).json();
      setOwnerToken(signInRes.token);
      localStorage.setItem('auth-token', signInRes.token);
    } catch (e) {
      console.error('onsubmit error', e);
    }
  };

  return (
    <Flex width='full' align='center' justifyContent='center'>
      <Stack
        p={8}
        maxWidth='500px'
        borderWidth={1}
        borderRadius={8}
        boxShadow='lg'
      >
        <Box textAlign='center'>
          <Heading>Register</Heading>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack my={4} textAlign='left'>
            <Input
              placeholder='firstName'
              {...register('firstName', {
                required: { value: true, message: 'firstname is required' },
              })}
            />
            {errors.firstName && (
              <Text color='red' fontSize='xs'>
                {errors.firstName?.message}
              </Text>
            )}
            <Input
              placeholder='lastName'
              {...register('lastName', {
                required: { value: true, message: 'lastname is required' },
              })}
            />
            {errors.lastName && (
              <Text color='red' fontSize='xs'>
                {errors.lastName?.message}
              </Text>
            )}
            <Input
              placeholder='email'
              {...register('email', {
                required: { value: true, message: 'email is required' },
              })}
            />
            {errors.email && (
              <Text color='red' fontSize='xs'>
                {errors.email?.message}
              </Text>
            )}
            <Input
              placeholder='password'
              {...register('password', {
                required: { value: true, message: 'password is required' },
              })}
            />
            {errors.password && (
              <Text color='red' fontSize='xs'>
                {errors.password?.message}
              </Text>
            )}
            <Input placeholder='phoneNumber' {...register('phoneNumber')} />
          </Stack>
          <Button
            color='teal'
            variant='outline'
            type='submit'
            width='full'
            mt={4}
          >
            Register
          </Button>
        </form>
      </Stack>
    </Flex>
  );
}
