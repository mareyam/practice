import React, { useState } from "react";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const CheckoutForm = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <Box w="100%">
      <FormControl isInvalid={isError} border="1px solid gray">
        <FormLabel fontWeight="700" fontSize="20px">
          Contact Info
        </FormLabel>
        <Input
          placeholder="Email"
          type="email"
          value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={isError} border="1px solid gray">
        <FormLabel fontWeight="700" fontSize="20px">
          Shipping
        </FormLabel>
        <FormLabel fontWeight="700" fontSize="15px">
          Full Name
        </FormLabel>
        <Input
          placeholder="Email"
          type="email"
          value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
        <FormLabel fontWeight="700" fontSize="15px">
          Country or region
        </FormLabel>
        <Input
          placeholder="Email"
          type="email"
          value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
        <FormLabel fontWeight="700" fontSize="15px">
          Address
        </FormLabel>
        <Input
          placeholder="Email"
          type="email"
          value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
    </Box>
  );
};
export default CheckoutForm;
