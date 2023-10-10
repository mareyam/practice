import React from "react";
import icons from "@/data/icons";
import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";

const SetupList = () => {
  return (
    <Box>
      <Text fontSize="20px" fontWeight="500">
        Select Icon
      </Text>
      <Box display="flex" role="group">
        {icons.map((item) => (
          <IconButton
            w="auto"
            bgColor="white"
            _groupHover={{ backgroundColor: "white" }}
            icon={<Image w="50px" h="50px" src={item.image} />}
          ></IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default SetupList;
