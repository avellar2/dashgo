import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align={"center"}>
            {showProfileData && (
                <Box mr={"4"} textAlign={"right"}>
                    <Text>Vanderson Avellar</Text>
                    <Text color={"gray.400"} fontSize={"small"}>
                        vandersonavellar1997@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar
                size="md"
                name="Vanderson Avellar"
                src="https://github.com/avellar2.png"
            />
        </Flex>
    );
}
