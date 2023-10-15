import React from "react";
import TagsList from "./TagsList";
import {
  Divider,
  Heading,
  Stack,
  Card,
  CardBody,
  Text,
} from "@chakra-ui/react";

const TagsCard = () => {
  return (
    <Card>
      <CardBody border="2px solid gray">
        <Stack mt="6" spacing="3">
          <TagsList />
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default TagsCard;
