import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup/dist/yup'

type SignInFormData = {
    email: string;
    password: string;
};

const signInFormSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha é obrigatório')
})

export default function SignIn() {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(signInFormSchema)
    });

    const {errors} = formState

    const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(values);
    };

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
                    <Input
                        type="email"
                        name="email"
                        label="Email"
                        error={errors.email}
                        {...register("email")}
                    />
                    <Input
                        type="password"
                        name="password"
                        label="Senha"
                        error={errors.password}
                        {...register("password")}
                    />
                </Stack>

                <Button
                    isLoading={formState.isSubmitting}
                    type="submit"
                    size="lg"
                    mt={6}
                    colorScheme={"pink"}
                >
                    Entrar
                </Button>
            </Flex>
        </Flex>
    );
}
