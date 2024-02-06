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

import Register from './register';

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iowner>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [isRegistered, setIsRegisterd] = React.useState(true);
  const [error, setError] = React.useState();
  const { setOwnerToken } = React.useContext(OwnerContext);

  const onSubmit: SubmitHandler<Iowner> = async (data) => {
    try {
      const user = { email: data.email, password: data.password };
      const signInRes = await (
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/owners/signin`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            email: user.email,
            password: user.password,
          }),
        })
      ).json();

      if (signInRes.error) {
        setError(signInRes.error);
      }
      setOwnerToken(signInRes.token);
      localStorage.setItem('auth-token', signInRes.token);
      localStorage.setItem('owner-id', signInRes.owner.id);
    } catch (error) {
      console.error(error);
    }
  };

  return isRegistered ? (
    <Flex width='full' align='center' justifyContent='center'>
      <Stack
        p={8}
        maxWidth='500px'
        borderWidth={1}
        borderRadius={8}
        boxShadow='lg'
      >
        <Box textAlign='center'>
          <Heading>Se connecter</Heading>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack my={4} textAlign='left'>
            <Input
              placeholder='email'
              type='email'
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
              type='password'
              autoComplete='on'
              {...register('password', {
                required: { value: true, message: 'password is required' },
              })}
            />
            {errors.password && (
              <Text color='red' fontSize='xs'>
                {errors.password?.message}
              </Text>
            )}
          </Stack>
          <Button
            color='teal'
            variant='outline'
            type='submit'
            width='full'
            mt={4}
          >
            Se connecter
          </Button>
          {error && (
            <Text color='red' fontSize='xs'>
              {error}
            </Text>
          )}
          <Text mt={2} textAlign='center'>
            Vous n avez pas de compte ?{' '}
            <Button color='teal.500' onClick={() => setIsRegisterd(false)}>
              S inscrire ici
            </Button>
          </Text>
        </form>
      </Stack>
    </Flex>
  ) : (
    <Register />
  );
}
