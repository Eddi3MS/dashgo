import React from "react";
import { Stack, HStack, Box } from "@chakra-ui/react";
import { PageButton } from "./components";

const Pagination = () => {
  return (
    <Stack
      direction={["column", "row"]}
      mt={8}
      justify="space-between"
      spacing={6}
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing={2}>
        <PageButton isCurrent>1</PageButton>
        <PageButton>2</PageButton>
        <PageButton>3</PageButton>
        <PageButton>4</PageButton>
      </HStack>
    </Stack>
  );
};

export default Pagination;
