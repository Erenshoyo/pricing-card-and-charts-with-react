import React, { use } from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  //   console.log(marksData)

  // data processing for charts;

  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math,
    };

    return student;
  });

  return (
    <div className="mx-30 my-10">
      <BarChart width={1000} height={500} data={marksChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip />
        <Legend />
        <Bar dataKey="physics" fill="green"></Bar>
        <Bar dataKey="chemistry" fill="blue"></Bar>
        <Bar dataKey="math" fill="red"></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;
