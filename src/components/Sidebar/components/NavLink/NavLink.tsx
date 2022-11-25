import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";
import React, { ElementType } from "react";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
}
const NavLink = (props: NavLinkProps) => {
  const { id, icon, children, ...rest } = props;
  return (
    <Link key={id} display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize={20} />
      <Text ml={4} fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
};

export default NavLink;
