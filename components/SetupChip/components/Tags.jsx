import {
  Box,
  Text,
  Select,
  ListItem,
  UnorderedList,
  HStack,
  VStack,
  Flex,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Tags = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [options] = useState(["Door", "Table", "Chair"]);

  const handleSelect = (e) => {
    const value = e.target.value;

    if (!selectedItems.includes(value)) {
      setSelectedItems([...selectedItems, value]);
    }
  };

  const handleRemove = (item) => {
    const updatedItems = selectedItems.filter(
      (selectedItem) => selectedItem !== item
    );
    setSelectedItems(updatedItems);
  };

  return (
    <Box>
      <Text fontWeight="500" fontSize="20px">
        Select Tags
      </Text>
      <Box display="flex">
        <Select placeholder="Tag" onChange={handleSelect} w="100px">
          <option value="Door">Door</option>
          <option value="Table">Table</option>
          <option value="Chair">Chair</option>
        </Select>

        <HStack>
          <Flex mx="5">
            {selectedItems.map((item) => (
              <Box
                display="flex"
                align="center"
                bgColor="#FDDB00"
                color="#842FA8"
                isRound={true}
                rounded="full"
                width="120px"
                px="2"
                justifyContent="space-between"
                role="group"
                mx="2"
              >
                <Text alignSelf="center" key={item}>
                  {item}
                </Text>
                <IconButton
                  w="auto"
                  bgColor="#FDDB00"
                  style={{ cursor: "pointer" }}
                  _groupHover={{ backgroundColor: "#FDDB00" }}
                  onClick={() => handleRemove(item)}
                  icon={<CloseButton />}
                ></IconButton>
              </Box>
            ))}
          </Flex>
        </HStack>
      </Box>
    </Box>
  );
};

export default Tags;
