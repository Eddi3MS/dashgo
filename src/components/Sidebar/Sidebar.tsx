import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useContextSelector } from "use-context-selector";
import { SidebarContext } from "../../context";
import { SidebarContent } from "./components";

const Sidebar = () => {
  const { toggleIsOpen, isOpen } = useContextSelector(
    SidebarContext,
    (state) => ({
      toggleIsOpen: state.toggleIsOpen,
      isOpen: state.isOpen,
    })
  );

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={toggleIsOpen}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p={4}>
            <DrawerCloseButton mt={6} />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarContent />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
  return (
    <Box as="aside" w={64} mr={8}>
      <SidebarContent />
    </Box>
  );
};

export default Sidebar;
