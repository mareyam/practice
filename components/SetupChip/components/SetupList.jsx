import React from "react";
import icons from "@/data/icons";
import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";

const SetupList = () => {
  return (
    <Box>
      <Text>Select Icon</Text>
      <Flex role="group">
        {icons.map((item) => (
          <IconButton
            w="auto"
            bgColor="white"
            _groupHover={{ backgroundColor: "white" }}
            icon={<Image w="50px" h="50px" src={item.image} />}
          ></IconButton>
        ))}
      </Flex>
    </Box>
  );
};

export default SetupList;
