import React from "react";
import table from "@/data/table";
import { Box, Text } from "@chakra-ui/react";

const TableData = () => {
  return (
    <Box>
      {table.map((item) => (
        <Text>{item.X}</Text>
      ))}
    </Box>
  );
};

export default TableData;
