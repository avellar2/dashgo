import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align={"center"}>
            <Box mr={"4"} textAlign={"right"}>
                <Text>Vanderson Avellar</Text>
                <Text color={"gray.400"} fontSize={"small"}>
                    vandersonavellar1997@gmail.com
                </Text>
            </Box>

            <Avatar
                size="md"
                name="Vanderson Avellar"
                src="https://github.com/avellar2.png"
            />
        </Flex>
    );
}
