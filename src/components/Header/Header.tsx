import React from "react";
import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Actions, Search, Profile, Logo } from "./components";
import { useContextSelector } from "use-context-selector";
import { List } from "phosphor-react";
import { SidebarContext } from "../../context";

const Header = () => {
  const toggleIsOpen = useContextSelector(
    SidebarContext,
    (state) => state.toggleIsOpen
  );

  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
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
      {!isDesktop ? (
        <IconButton
          aria-label="Open Sidebar"
          icon={<Icon as={List} />}
          fontSize={24}
          variant="unstyled"
          onClick={toggleIsOpen}
          mr={2}
          display="flex"
          alignItems="center"
        />
      ) : null}
      <Logo />

      {isDesktop ? <Search /> : null}

      <Flex align="center" ml="auto">
        <Actions />

        <Profile isDesktop={isDesktop} />
      </Flex>
    </Flex>
  );
};

export default Header;
