import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { ElementType } from "react";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  href: string;
}
const NavLink = (props: NavLinkProps) => {
  const { id, icon, children, href, ...rest } = props;
  return (
    <Link href={href}>
      <ChakraLink key={id} display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize={20} />
        <Text ml={4} fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
};

export default NavLink;
