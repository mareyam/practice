import {
  Container,
  HStack,
  Image,
  Heading,
  VStack,
  IconButton,
  Box,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <Box w="85vw" mt="5">
      <HStack mx="5" justifyContent="space-between" my="5">
        <Heading fontWeight="500">Dashboard</Heading>
        <HStack>
          <Image src="/image 3.png" />
          <Heading fontWeight="500" fontSize="18px">
            Adminstrator
          </Heading>
          <IconButton
            w="auto"
            bgColor="white"
            icon={
              <Box>
                <ChevronDownIcon />
              </Box>
            }
          ></IconButton>
        </HStack>
      </HStack>
      <Divider />
    </Box>
  );
};

export default Header;
