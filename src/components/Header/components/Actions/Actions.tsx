import React from "react";
import { Icon, HStack } from "@chakra-ui/react";
import { Bell, UserPlus } from "phosphor-react";

const Actions = () => {
  const spacingVariations = [6, 8];
  return (
    <HStack
      spacing={spacingVariations}
      mx={spacingVariations}
      pr={spacingVariations}
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
