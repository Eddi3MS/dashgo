import React from "react";
import { Button, Box, Icon, Tr, Td, Checkbox, Text } from "@chakra-ui/react";
import { Pencil } from "phosphor-react";

interface UsersTableRowProps {
  isDesktop?: boolean;
}

const UsersTableRow = (props: UsersTableRowProps) => {
  const { isDesktop = true } = props;
  return (
    <Tr>
      <Td px={[4, 4, 6]}>
        <Checkbox colorScheme="pink" />
      </Td>
      <Td>
        <Box>
          <Text fontWeight="bold">Edson Marcelo</Text>
          <Text fontSize="sm" color="gray.300">
            edson.marc79@gmail.com
          </Text>
        </Box>
      </Td>
      {isDesktop ? <Td>24 de Novembro de 2022</Td> : null}
      <Td>
        <Button
          size="sm"
          fontSize="sm"
          colorScheme="purple"
          leftIcon={
            <Icon as={Pencil} fontSize={18} style={{ marginRight: "-.5rem" }} />
          }
          cursor="pointer"
          ml="auto"
          display="flex"
          justifyContent="center"
          w={8}
        />
      </Td>
    </Tr>
  );
};

export default UsersTableRow;
