import React from "react";
import {
  Card,
  Box,
  Stack,
  Image,
  Text,
  CardBody,
  Heading,
  Button,
} from "@chakra-ui/react";

const AddTableMobile = () => {
  return (
    <Box>
      <Card maxW="sm" mt="3">
        <CardBody>
          <Stack
            align="center"
            mt="6"
            spacing="3"
            justifyContent="space-between"
          >
            <Image src="/image 5.png" w="100px" />
            <Text>Put chip near mobile to add table</Text>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default AddTableMobile;
