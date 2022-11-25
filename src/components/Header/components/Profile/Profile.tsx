import React from "react";
import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  isDesktop?: boolean;
}

const Profile = (props: ProfileProps) => {
  const { isDesktop = true } = props;
  return (
    <Flex align="center">
      {isDesktop ? (
        <Box mr={4} textAlign="right">
          <Text>Edson Marcelo</Text>
          <Text color="gray.300" fontSize="small">
            edsonmarc2014@gmail.com
          </Text>
        </Box>
      ) : null}

      <Avatar
        size="md"
        name="Edson Marcelo"
        src="https://github.com/Eddi3ms.png"
      />
    </Flex>
  );
};

export default Profile;
