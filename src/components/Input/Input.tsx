import React from "react";
import {
  FormLabel,
  FormControl,
  Input as ChakraInput,
  InputProps,
} from "@chakra-ui/react";

interface IInputProps extends InputProps {
  label?: string;
}

const Input = ({ label, name, ...rest }: IInputProps) => {
  return (
    <FormControl>
      {!!label ? <FormLabel htmlFor="email">{label}</FormLabel> : null}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        _hover={{ bg: "gray.900" }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
};

export default Input;
