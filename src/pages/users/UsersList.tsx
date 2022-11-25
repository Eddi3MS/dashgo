import React from "react";
import {
  Flex,
  Heading,
  Button,
  Box,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Checkbox,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Header, Pagination, Sidebar, UsersTableRow } from "../../components";
import { Plus } from "phosphor-react";
import Link from "next/link";

const UserList = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box>
      <Header />
      <Flex my={6} maxW={1400} mx="auto" px={6}>
        <Sidebar />

        <Box flex={1} borderRadius={8} bg="gray.800" p={[6, 8]}>
          <Flex mb={8} justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as={Link}
              href="/users/create"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={Plus} fontSize={20} />}
              cursor="pointer"
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={[4, 4, 6]} color="gray.300" w={8}>
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isDesktop ? <Th>Data de cadastro</Th> : null}
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <UsersTableRow isDesktop={isDesktop} />
              <UsersTableRow isDesktop={isDesktop} />
              <UsersTableRow isDesktop={isDesktop} />
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
};

export default UserList;
