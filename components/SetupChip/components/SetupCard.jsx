import React from "react";
import {
  Card,
  Stack,
  CardBody,
  Heading,
  Text,
  Button,
  Divider,
  Box,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import SetupList from "./SetupList";
import Tags from "./Tags";
import AddTableMobile from "./AddTableMobile";

const SetupCard = () => {
  const toast = useToast();

  const handleFinishButtonClick = () => {
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Card>
      <CardBody>
        <Stack mt="6" spacing="3">
          <Box w="50%" role="group">
            <Button
              bgColor="black"
              color="white"
              isRound={true}
              size="md"
              rounded="full"
              w="50%"
              _groupHover={{ bgColor: "black", color: "white" }}
            >
              Coffee Table 2
            </Button>
          </Box>
          <SetupList />
          <Tags />
          <AddTableMobile />
          <Box w="50%" centerContent role="group">
            <Button
              bgColor="#FDDB00"
              color="#842FA8"
              isRound={true}
              size="md"
              rounded="full"
              w="50%"
              _groupHover={{ bgColor: "#FDDB00", color: "#842FA8" }}
              onClick={handleFinishButtonClick}
            >
              Finish +
            </Button>
          </Box>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default SetupCard;
