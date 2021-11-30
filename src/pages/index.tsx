import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
} from "@chakra-ui/react";

export default function Home() {
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
                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                            focusBorderColor="pink.500"
                            name="email"
                            id="email"
                            type="email"
                            bgColor={"gray.900"}
                            variant={"filled"}
                            _hover={{
                                bgColor: "gray.900",
                            }}
                            size={"lg"}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="password">Senha</FormLabel>
                        <Input
                            focusBorderColor="pink.500"
                            name="password"
                            id="password"
                            type="password"
                            bgColor={"gray.900"}
                            variant={"filled"}
                            _hover={{
                                bgColor: "gray.900",
                            }}
                            size={"lg"}
                        />
                    </FormControl>
                </Stack>

                <Button type="submit" size="lg" mt={6} colorScheme={"pink"}>
                    Entrar
                </Button>
            </Flex>
        </Flex>
    );
}
