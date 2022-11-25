import { Box, Stack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

const NavSection = (props: NavSectionProps) => {
  const { title, children } = props;
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      {children}
    </Box>
  );
};

export default NavSection;
