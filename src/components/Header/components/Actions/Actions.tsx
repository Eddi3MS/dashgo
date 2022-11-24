import React from "react";
import { Icon, HStack } from "@chakra-ui/react";
import { Bell, UserPlus } from "phosphor-react";

const Actions = () => {
  return (
    <HStack
      spacing={8}
      mx={8}
      pr={8}
      py={1}
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={Bell} fontSize={20} />
      <Icon as={UserPlus} fontSize={20} />
    </HStack>
  );
};

export default Actions;
