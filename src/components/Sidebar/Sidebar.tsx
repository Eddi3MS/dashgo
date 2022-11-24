import React from "react";
import { Flex, Text, Icon, Stack, Box, Link } from "@chakra-ui/react";
import { menuConfig } from "./menu-config";

const Sidebar = () => {
  return (
    <Box as="aside" w={64} mr={8}>
      <Stack spacing={12} align="flex-start">
        {Object.entries(menuConfig).map(([_, submenu]) => (
          <Box key={submenu.title}>
            <Text fontWeight="bold" color="gray.400" fontSize="small">
              {submenu.title}
            </Text>
            <Stack spacing={4} mt={8} align="stretch">
              {submenu.links.map(({ id, Icon: LinkIcon, title }) => (
                <Link key={id}>
                  <Flex align="center">
                    <Icon as={LinkIcon} fontSize={20} />
                    <Text ml={4} fontWeight="medium">
                      {title}
                    </Text>
                  </Flex>
                </Link>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Sidebar;
