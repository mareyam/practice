import React, { useState } from "react";
import table from "@/data/table";
import { Box } from "@chakra-ui/react";
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  Legend,
  Tooltip,
  CartesianGrid,
} from "recharts";

const Table = () => {
  const [data, setData] = useState(table);

  return (
    <Box>
      <LineChart width={1000} height={300} data={data}>
        <XAxis dataKey="Y" />
        <YAxis domain={[100, 400]} type="number" />
        <CartesianGrid stroke="grey" strokeDasharray="5 5" />
        <Line
          dataKey="X"
          stroke="purple"
          strokeWidth={3}
          isAnimationActive={false}
        />
        <Line
          dataKey="Y"
          stroke="orange"
          strokeWidth={3}
          isAnimationActive={false}
        />
        <Legend />
        <Tooltip />
      </LineChart>
    </Box>
  );
};

export default Table;
