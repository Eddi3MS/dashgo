import { Flex, Button } from "@chakra-ui/react";
import { Input } from "../components";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        gap={4}
      >
        <Input label="E-mail" name="email" type="email" />

        <Input label="Senha" name="password" type="password" />

        <Button type="submit" mt={6} colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
