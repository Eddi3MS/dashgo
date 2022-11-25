import React from "react";
import {
  Flex,
  Box,
  Heading,
  Divider,
  Stack,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { Header, Input, Sidebar } from "../../../components";
import Link from "next/link";

const CreateUser = () => {
  const spacingVariables = [6, 8];

  return (
    <Box>
      <Header />
      <Flex my={6} maxW={1400} mx="auto" px={6}>
        <Sidebar />

        <Box flex={1} borderRadius={8} bg="gray.800" p={spacingVariables}>
          <Heading size="lg" fontWeight="normal">
            Criar Usuário
          </Heading>

          <Divider my={6} borderColor="gray.700" />

          <Stack spacing={8}>
            <SimpleGrid
              minChildWidth="240px"
              spacing={spacingVariables}
              w="100%"
            >
              <Input name="name" label="Nome completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid
              minChildWidth="240px"
              spacing={spacingVariables}
              w="100%"
            >
              <Input name="password" type="password" label="Senha" />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmar senha"
              />
            </SimpleGrid>
          </Stack>

          <Flex mt={spacingVariables} justify="flex-end" gap={4}>
            <Button as={Link} href="/users" colorScheme="whiteAlpha">
              Cancelar
            </Button>
            <Button colorScheme="pink">Salvar</Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateUser;
