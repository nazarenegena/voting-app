import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Defs,
  LinearGradient,
  Stop,
} from "recharts";

const FavouritesLineCharts = () => {
  const data = [
    { name: "music", votes: 3500 },
    { name: "Animations", votes: 3000 },
    { name: "movies", votes: 1900 },
    { name: "Cartoons", votes: 2780 },
    { name: "Books", votes: 830 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: 0,
          bottom: 5,
        }}
        barSize={30}
      >
        <defs>
          <linearGradient id="colorVotes" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8c4ecb" />
            <stop offset="25%" stopColor="#b244b5" />
            <stop offset="50%" stopColor="#cb419e" />
            <stop offset="75%" stopColor="#d94587" />
            <stop offset="100%" stopColor="#df5173" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="votes" fill="url(#colorVotes)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default FavouritesLineCharts;
