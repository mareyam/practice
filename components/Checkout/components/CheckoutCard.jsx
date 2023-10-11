import React from "react";
import CheckoutForm from "./CheckoutForm";
import Billing from "./Billing";
import { Box, SimpleGrid } from "@chakra-ui/react";

const CheckoutCard = () => {
  return (
    <SimpleGrid mx="5" columns={{ base: 1, md: 2 }} w="100vw">
      <Box width="80%">
        <CheckoutForm />
      </Box>
      <Box width="100%">
        <Billing />
      </Box>
    </SimpleGrid>
  );
};

export default CheckoutCard;
