import React from "react";
import {
  Card,
  Stack,
  Heading,
  Text,
  Button,
  Divider,
  ButtonGroup,
  Image,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import ChipList from "./ChipList";

const ChipCard = () => {
  return (
    <Card>
      <CardBody boxShadow="lg">
        <Stack mt="6" spacing="3">
          <ChipList />
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default ChipCard;
