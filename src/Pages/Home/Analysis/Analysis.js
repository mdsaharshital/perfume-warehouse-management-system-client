import React from "react";
import {
  BarChart,
  AreaChart,
  Bar,
  XAxis,
  Area,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Analysis = () => {
  const data1 = [
    {
      name: "Product A",
      Price: 4000,
      Sells: 2400,
      stock: 2400,
    },
    {
      name: "Product B",
      Price: 3000,
      Sells: 1398,
      stock: 2210,
    },
    {
      name: "Product C",
      Price: 2000,
      Sells: 9800,
      stock: 2290,
    },
    {
      name: "Product D",
      Price: 2780,
      Sells: 3908,
      stock: 2000,
    },
    {
      name: "Product E",
      Price: 1890,
      Sells: 4800,
      stock: 2181,
    },
    {
      name: "Product F",
      Price: 2390,
      Sells: 3800,
      stock: 2500,
    },
    {
      name: "Product G",
      Price: 3490,
      Sells: 4300,
      stock: 2100,
    },
  ];

  return (
    <div>
      <h1 className="text-center my-5">Product analysis</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">
        <BarChart
          width={350}
          height={300}
          data={data1}
          className="mx-auto"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Sells" fill="#8884d8" />
          <Bar dataKey="Price" fill="#82ca9d" />
        </BarChart>
        <AreaChart
          width={350}
          height={300}
          data={data1}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          className="mx-auto"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="stock"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="price"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="sells"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Analysis;
