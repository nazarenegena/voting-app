import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AgeBarChart = () => {
  const data = [
    {
      age: "15-19",
      votes: 3000,
    },
    {
      age: "20-24",
      votes: 3500,
    },
    {
      age: "25-29",
      votes: 2830,
    },
    {
      age: "30-34",
      votes: 1780,
    },
    {
      age: "35-40",
      votes: 890,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={25}
      >
        <XAxis dataKey="age" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="votes" fill="#BA95E0" background={{ fill: "#ebe0f6" }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AgeBarChart;
