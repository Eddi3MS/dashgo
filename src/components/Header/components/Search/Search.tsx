import React from "react";
import { Flex, Input, Icon } from "@chakra-ui/react";
import { MagnifyingGlass } from "phosphor-react";

const Search = () => {
  return (
    <Flex
      as="label"
      flex={1}
      py={4}
      px={8}
      ml={6}
      maxW={400}
      alignSelf="center"
      align="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px={4}
        mr={4}
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
      />

      <Icon as={MagnifyingGlass} fontSize={20} />
    </Flex>
  );
};

export default Search;
