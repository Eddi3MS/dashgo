import { Stack } from "@chakra-ui/react";
import React from "react";
import { menuConfig } from "../../menu-config";
import NavLink from "../NavLink";
import NavSection from "../NavSection";

const SidebarContent = () => {
  return (
    <Stack spacing={12} align="flex-start">
      {Object.entries(menuConfig).map(([_, submenu]) => (
        <NavSection title={submenu.title} key={submenu.title}>
          <Stack spacing={4} mt={8} align="stretch">
            {submenu.links.map(({ id, Icon, title, href }) => (
              <NavLink key={id} id={id} icon={Icon} href={href}>
                {title}
              </NavLink>
            ))}
          </Stack>
        </NavSection>
      ))}
    </Stack>
  );
};

export default SidebarContent;
