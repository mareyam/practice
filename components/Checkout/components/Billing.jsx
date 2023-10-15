import React from "react";
import {
  Card,
  CardHeader,
  Text,
  CardBody,
  CardFooter,
  HStack,
  Divider,
  Button,
  Heading,
} from "@chakra-ui/react";
const Billing = () => {
  return (
    <Card mt="5">
      <CardBody>
        <HStack justifyContent="space-between">
          <Text>Subtotal (1 item)</Text>
          <Text>$1.00</Text>
        </HStack>
        <HStack mb="2" justifyContent="space-between">
          <Text>Shipping </Text>
          <Text>Free</Text>
        </HStack>
        <Divider />
        <Heading mt="2" fontSize="20px">
          Total
        </Heading>
        <Button mt="2" w="100%">
          Place order
        </Button>
      </CardBody>
    </Card>
  );
};

export default Billing;
