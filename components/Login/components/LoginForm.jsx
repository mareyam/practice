import React, { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Button,
  Center,
  Image,
} from "@chakra-ui/react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const isEmailError = email === "";
  const isPasswordError = password === "";

  return (
    <Box>
      <Flex justify="flex-end">
        <Image
          style={{
            clipPath: "circle(60% at 100% 0%);",
            height: "400px",
          }}
          //   w="200px"
          //   h="200px"
          //   borderRadius="100%"
          src="/login1.jpg"
        />
      </Flex>
      <Center h="100vh">
        <Box w="40%">
          <Heading color="#842FA8">Increasa</Heading>
          <FormControl p="1" isInvalid={isEmailError}>
            <FormLabel fontWeight="700" fontSize="20px">
              Login
            </FormLabel>
            <Box border="1px solid blue" p="2" borderRadius="10px">
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                border="none"
              />
            </Box>
            {!isEmailError ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl p="1" isInvalid={isPasswordError}>
            <FormLabel fontWeight="700" fontSize="20px">
              Password
            </FormLabel>

            <Input
              placeholder="Password"
              type="text"
              value={password}
              border="none"
              onChange={handlePasswordChange}
            />
            {!isPasswordError ? (
              <FormHelperText>Enter your password.</FormHelperText>
            ) : (
              <FormErrorMessage>Password is required.</FormErrorMessage>
            )}
            <Button rounded="full" w="100%" bgColor="#FDDB00">
              Login
            </Button>
            <FormHelperText>Don't have an account? Signup</FormHelperText>
          </FormControl>
        </Box>
      </Center>

      <Box>
        <Image
          style={{
            clipPath: "circle(60% at 0% 30%);",
            height: "400px",
          }}
          src="/login2.avif"
        />
      </Box>
    </Box>
  );
};

export default LoginForm;
