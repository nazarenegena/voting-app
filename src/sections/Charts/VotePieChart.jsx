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
const VotePieChart = () => {
  const data = [
    { name: "voted", voters: 700 },
    { name: "not voted", voters: 300 },
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
          cx={180}
          cy={150}
          startAngle={180}
          endAngle={0}
          innerRadius={100}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={5}
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
        <Legend height={1} verticalAlign="middle" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default VotePieChart;
