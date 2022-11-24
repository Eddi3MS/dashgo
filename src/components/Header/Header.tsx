import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Actions, Search, User } from "./components";

const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h={20}
      mx="auto"
      mt={4}
      px={6}
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w={64}>
        dashgo
        <Text as="span" ml={1} color="pink.500">
          .
        </Text>
      </Text>

      <Search />

      <Flex align="center" ml="auto">
        <Actions />

        <User />
      </Flex>
    </Flex>
  );
};

export default Header;
