import { Box, Button } from "@chakra-ui/react";
import React from "react";

const AddNewChip = () => {
  return (
    <Box>
      <Button
        bgColor="#FDDB00"
        color="#842FA8"
        isRound={true}
        size="md"
        rounded="full"
      >
        Add New Chip +
      </Button>
    </Box>
  );
};

export default AddNewChip;
