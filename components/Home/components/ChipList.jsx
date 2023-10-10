import React, { useState } from "react";
import chips from "@/data/Chips";
import {
  SimpleGrid,
  IconButton,
  Image,
  Box,
  HStack,
  VStack,
  Text,
  Flex,
} from "@chakra-ui/react";
import AddNewChip from "./AddNewChip";

const ChipList = () => {
  return (
    <Box>
      <Flex justifyContent="space-between" align="center">
        <Flex justifyContent="space-between">
          <Text fontWeight="700" >All Tables ({chips.length})</Text>
        </Flex>
        <AddNewChip />
      </Flex>

      <SimpleGrid my="2" columns={{ base: 1, md: 4 }} spacing="5">
        {chips.map((item) => (
          <Box>
            <HStack
              px="2"
              py="1"
              w="300px"
              border="2px solid"
              spacing="10"
              justifyContent="space-between"
            >
              <HStack>
                <Image src="/image 3.png" />
                <VStack gap="0" align="left">
                  <Text fontWeight="500" fontSize="17px">
                    {item.name}
                  </Text>
                  {item.status ? (
                    <Text>{item.status}</Text>
                  ) : (
                    <Text>Tap to setup pin</Text>
                  )}
                </VStack>
              </HStack>
              {item.status ? (
                <IconButton
                  w="auto"
                  bgColor="white"
                  icon={<Image w="25px" h="25px" src="/check.png" />}
                ></IconButton>
              ) : (
                <IconButton
                  w="auto"
                  bgColor="white"
                  icon={<Image w="25px" h="25px" src="/delete.png" />}
                ></IconButton>
              )}
            </HStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ChipList;
