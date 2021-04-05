import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../components/Form/input';
import { Flex, Button, Stack } from '@chakra-ui/react';

type SignInFormData = {
  email: string;
  password:  string;
}

export default function SignIn() {
  const {register, handleSubmit, formState } = useForm();

  const handleSigIn: SubmitHandler<SignInFormData> = async (values)  => {
    await  new Promise(resolve =>  setTimeout(resolve, 2000));


    console.log(values);
  }

  return(
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSigIn)}
      >
        <Stack spacing="4">
          <Input name="email" label="E-mail" type="e-mail" {...register("email")}/>
          <Input name="password" label="Senha" type="password" {...register("password")}/>
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
