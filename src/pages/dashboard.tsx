import React from "react";
import { Header, Sidebar } from "../components";
import { Flex } from "@chakra-ui/react";

const dashboard = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my={6} maxW={1480} mx="auto" px={6}>
        <Sidebar />
      </Flex>
    </Flex>
  );
};

export default dashboard;
