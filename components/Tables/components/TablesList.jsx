import React from "react";
import { Button, Heading } from "@chakra-ui/react";
import tables from "@/data/Tables";
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
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const TablesList = () => {
  return (
    <div>
      <Flex justifyContent="space-between" align="center">
        <Flex justifyContent="space-between">
          <Text fontWeight="500" fontSize="20px">
            Total NFC taps this week
          </Text>
        </Flex>
      </Flex>

      <SimpleGrid my="2" columns={{ base: 1, md: 4 }} spacing="5">
        {tables.map((item) => (
          <Box>
            <HStack
              px="2"
              py="1"
              w="300px"
              h="200px"
              border="2px solid"
              spacing="10"
              justifyContent="space-between"
            >
              <HStack>
                <VStack gap="0" align="left">
                  <Text fontWeight="500" fontSize="20px">
                    {item.name}
                  </Text>
                  <Text fontWeight="600" fontSize="30px">
                    {item.taps}{" "}
                    <Text as="span" fontSize="15px">
                      taps
                    </Text>
                  </Text>
                </VStack>
              </HStack>
              <VStack align="center" spacing={4}>
                <Button bgColor="#FDDB00">View Details</Button>
              </VStack>
            </HStack>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default TablesList;
