import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

interface PageButtonProps extends ButtonProps {
  isCurrent?: boolean;
}
const PageButton = (props: PageButtonProps) => {
  const { isCurrent = false, children, ...rest } = props;

  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width={4}
        colorScheme="pink"
        disabled
        _disabled={{ bg: "pink.500", cursor: "default" }}
        {...rest}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width={4}
      bg="gray.700"
      _hover={{
        bg: "gray.500",
      }}
    >
      {children}
    </Button>
  );
};

export default PageButton;
