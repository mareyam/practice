import React from "react";
import { Flex, Container, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const Layout = ({ children }) => {
  return (
    <Flex overflow="hidden" display="flex">
      <Box flex="2">
        <Navbar />
      </Box>
      <Box flex="8">
        <Header />
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
