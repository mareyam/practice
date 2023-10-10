import { Box } from "@chakra-ui/react";
import React from "react";
import CheckoutCard from "@/components/Checkout/components/CheckoutCard";

const checkout = () => {
  return (
    <Box display="flex" w="100vw">
      <CheckoutCard />
    </Box>
  );
};

export default checkout;
