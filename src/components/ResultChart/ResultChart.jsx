import React from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const resultData = [
  {
    id: 1,
    name: "Alex Johnson",
    physics: 78,
    chemistry: 82,
    math: 90,
  },
  {
    id: 2,
    name: "Sam Smith",
    physics: 85,
    chemistry: 88,
    math: 92,
  },
  {
    id: 3,
    name: "Jordan Lee",
    physics: 65,
    chemistry: 70,
    math: 68,
  },
  {
    id: 4,
    name: "Casey Brown",
    physics: 92,
    chemistry: 91,
    math: 95,
  },
  {
    id: 5,
    name: "Jamie Davis",
    physics: 74,
    chemistry: 76,
    math: 80,
  },
  {
    id: 6,
    name: "Riley Miller",
    physics: 88,
    chemistry: 85,
    math: 89,
  },
  {
    id: 7,
    name: "Taylor Wilson",
    physics: 60,
    chemistry: 65,
    math: 62,
  },
  {
    id: 8,
    name: "Morgan Moore",
    physics: 95,
    chemistry: 94,
    math: 98,
  },
  {
    id: 9,
    name: "Drew Taylor",
    physics: 81,
    chemistry: 79,
    math: 85,
  },
  {
    id: 10,
    name: "Jordan Anderson",
    physics: 70,
    chemistry: 72,
    math: 75,
  },
];

const ResultChart = () => {
  return (
    <div className="mx-30 my-10">
      <LineChart width={1000} height={500} data={resultData}>
        <XAxis dataKey='name'></XAxis>
        <YAxis></YAxis>
        <Tooltip/>
        <Legend/>
        <Line dataKey='math' stroke="red"></Line>
        <Line dataKey='physics' stroke="green"></Line>
        <Line dataKey='chemistry' stroke="blue"></Line>
      </LineChart>
    </div>
  );
};

export default ResultChart;
