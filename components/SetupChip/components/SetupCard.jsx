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
import SetupList from "./SetupList";

const SetupCard = () => {
  return (
    <Card>
      <CardBody border="2px solid gray">
        <Stack mt="6" spacing="3">
          <SetupList />
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default SetupCard;
