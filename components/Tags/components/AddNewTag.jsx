import { Box, Button } from "@chakra-ui/react";
import React from "react";

const AddNewTag = () => {
  return (
    <Box>
      <Button
        bgColor="#FDDB00"
        color="#842FA8"
        isRound={true}
        size="md"
        rounded="full"
      >
        Add New Tag +
      </Button>
    </Box>
  );
};

export default AddNewTag;
