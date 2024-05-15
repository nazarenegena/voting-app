import React from "react";

import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Label,
  LabelList,
} from "recharts";
//
const GenderPieChart = () => {
  const data = [
    { name: "Female", voters: 700 },
    { name: "male", voters: 300 },
  ];

  const COLORS = ["#DF5173", "#BA95E0"];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }
    return null;
  };
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={data}
          cx={200}
          cy={150}
          innerRadius={80}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={7}
          dataKey="voters"
          nameKey="name"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label
            value={data[0].value}
            position="top"
            fill="black"
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              fontFamily: "Roboto",
            }}
          />
        </Pie>

        <Tooltip content={<CustomTooltip />} />
        <Legend height={1} verticalAlign="top" align="left" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default GenderPieChart;
