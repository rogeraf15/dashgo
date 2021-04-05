import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Flex, Button, Stack } from '@chakra-ui/react';
import * as yup  from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


import { Input } from '../components/Form/input';

type SignInFormData = {
  email: string;
  password:  string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const {register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });


  const handleSigIn: SubmitHandler<SignInFormData> = async (values)  => {
    await  new Promise(resolve =>  setTimeout(resolve, 2000));

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
          <Input 
            name="email" 
            label="E-mail" 
            type="e-mail"
            error={formState.errors.email} 
            {...register("email")} 
          />
          <Input 
            name="password" 
            label="Senha" 
            type="password" 
            error={formState.errors.password}
            {...register("password")}/>
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
