import React from "react";
import TablesList from "./TablesList";
import {
  Divider,
  Heading,
  Stack,
  Card,
  CardBody,
  Text,
} from "@chakra-ui/react";

const TablesCard = () => {
  return (
    <Card>
      <CardBody border="2px solid gray">
        <Stack mt="6" spacing="3">
          <TablesList />
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default TablesCard;
