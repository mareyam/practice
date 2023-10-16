import React, { useState } from "react";
import table from "@/data/table";
import { Box, Button, Center, Heading } from "@chakra-ui/react";
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  Legend,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";

const data = [
  {
    title: "Monday",
    uv: 60,
    pv: 2400,
    amt: 2400,
  },
  {
    title: "Tuesday",
    uv: 120,
    pv: 1398,
    amt: 2210,
  },
  {
    title: "Wednesday",
    uv: 43,
    pv: 9800,
    amt: 2290,
  },
  {
    title: "Thursday",
    uv: 90,
    pv: 3908,
    amt: 2000,
  },
  {
    title: "Friday",
    uv: 300,
    pv: 4800,
    amt: 2181,
  },
  {
    title: "Saturday",
    uv: 230,
    pv: 4800,
    amt: 2181,
  },
  {
    title: "Sunday",
    uv: 140,
    pv: 4800,
    amt: 2181,
  },
];

export default function App() {
  return (
    <Box>
      <Heading mx="14" my="5" fontWeight="600" fontSize="20px">
        Total NFC Taps this week
      </Heading>
      <Box alignContent="center" justifyContent="center">
        <AreaChart
          width={1300}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid horizontal={true} vertical={false} />
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#FDDB00"
            fill="#FDDB0033"
          />
        </AreaChart>
      </Box>
      <Button mx="14" my="5" bgColor="#FDDB00" color="black">
        View all Tables
      </Button>
    </Box>
  );
}

// const Table = () => {
//   const [data, setData] = useState(table);

//   return (
//     <AreaChart
//       width={500}
//       height={300}
//       data={data}
//       margin={{
//         top: 10,
//         right: 30,
//         left: 0,
//         bottom: 0,
//       }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="X" />
//       <YAxis />
//       <Tooltip />
//       <Area type="monotone" dataKey="Y" stackId="1" stroke="pink" fill="pink" />
//     </AreaChart>
//   );
// };

// export default Table;

{
  /* <LineChart width={1000} height={400} data={data}>
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
  strokeWidth={6}
  isAnimationActive={false}
/>
<Legend />
<Tooltip />
</LineChart> */
}
