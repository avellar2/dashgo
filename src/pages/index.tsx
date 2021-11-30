import {
    Button,
    Flex,
    Stack,
} from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SignIn() {
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
            >
                <Stack spacing={"4"}>
                   
                   <Input type='email' name='email' label='Email'/> 
                   <Input type='password' name='password' label='Senha'/> 
                    
                </Stack>

                <Button type="submit" size="lg" mt={6} colorScheme={"pink"}>
                    Entrar
                </Button>
            </Flex>
        </Flex>
    );
}
