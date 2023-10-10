import React, { useState } from "react";
import {
  Center,
  Icon,
  CheckIcon,
  IconButton,
  Button,
  Container,
  SimpleGrid,
  Box,
  Image,
  HStack,
  Stack,
  Heading,
  Text,
  Divider,
  Flex,
  VStack,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  const [toggleHam, setToggleHam] = useState(false);
  return (
    <Container
      bg="gray.100"
      maxW="100vw"
      position="sticky"
      top="0"
      zIndex="105"
      minH="100vh"
      bgColor="#1F1F1F"
      color="white"
    >
      <Box
        align="center"
        p={{ base: "2", md: "5" }}
        justifyContent="space-between"
      >
        <Link as={NextLink} href="/">
          <Heading mt="5" mb="5">
            Increasa
          </Heading>
        </Link>

        <Button mt="4" w="90%">
          Dashboard
        </Button>

        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            transition="all 0.3s ease-out"
            w="50px"
            transform={toggleHam ? "rotate(0deg)" : "rotate(90deg)"}
            fontSize={{ base: "xl", md: "2xl" }}
            icon={<Box>{/* <DragHandleIcon /> */}</Box>}
            onClick={() => setToggleHam(!toggleHam)}
          ></IconButton>
        </Box>

        <Box display={{ base: "none", md: "block" }}>
          <VStack
            position="relative"
            justifyContent="space-around"
            gap="3"
            display="block"
          >
            {/* <AddToCartPopup /> */}
            <VStack spacing="5" mt="5">
              <Box>
                <Link as={NextLink} href="/">
                  All insights
                </Link>
              </Box>

              <Box>
                <Link as={NextLink} href="/products">
                  Tables
                </Link>
              </Box>

              <Box>
                <Link as={NextLink} href="/cart">
                  Pricing
                </Link>
              </Box>
            </VStack>
          </VStack>
        </Box>
      </Box>

      {toggleHam && (
        <Box
          top="12"
          display={{ base: "block", md: "none" }}
          right="0"
          bg="white"
          zIndex="105"
          position="absolute"
          h="150px"
          w="150px"
        >
          <Stack spacing="5">
            <Link as={NextLink} href="/">
              Home
            </Link>
            <Link as={NextLink} href="/products">
              Chips
            </Link>
            <Link as={NextLink} href="/cart">
              Tables
            </Link>
          </Stack>
        </Box>
      )}
    </Container>
  );
};

export default Navbar;
