import {
    Button,
    Flex,
    Stack,
} from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import {SubmitHandler, useForm} from 'react-hook-form'
import { setTimeout } from "timers/promises";

type SignInFormData = {
    email: string,
    password: string,
}

export default function SignIn() {

    const {register, handleSubmit, formState} = useForm()
    
    const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
        await new Promise(resolve => setTimeout());
        console.log(values)
    }

    return (
        <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
            <Flex
                as="form"
                justifyContent="center"
                flexDir="column"
                borderRadius={8}
                width="100%"
                maxWidth={360}
                bg="gray.800"
                p={8}
                onSubmit={handleSubmit(handleSignIn)}
            >
                <Stack spacing={"4"}>
                   
                   <Input type='email' name='email' label='Email' {...register('email')}/> 
                   <Input type='password' name='password' label='Senha' {...register('password')}/> 
                    
                </Stack>

                <Button isLoading={formState.isSubmitting} type="submit" size="lg" mt={6} colorScheme={"pink"}>
                    Entrar
                </Button>
            </Flex>
        </Flex>
    );
}
