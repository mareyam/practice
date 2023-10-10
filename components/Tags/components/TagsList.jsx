import { Heading } from "@chakra-ui/react";
import React from "react";
import chips from "@/data/Chips";
import {
  SimpleGrid,
  Box,
  HStack,
  VStack,
  Flex,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import AddNewTag from "./AddNewTag";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const TagsList = () => {
  return (
    <div>
      <Flex justifyContent="space-between" align="center">
        <Flex justifyContent="space-between">
          <Text fontWeight="700">Tag List ({chips.length})</Text>
        </Flex>
        <AddNewTag />
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
                <VStack gap="0" align="left">
                  <Text fontWeight="500" fontSize="17px">
                    {item.name}
                  </Text>
                </VStack>
              </HStack>

              <Box>
                <IconButton
                  w="auto"
                  bgColor="white"
                  icon={<DeleteIcon />}
                ></IconButton>

                <IconButton
                  w="auto"
                  bgColor="white"
                  icon={<EditIcon />}
                ></IconButton>
              </Box>
            </HStack>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default TagsList;
