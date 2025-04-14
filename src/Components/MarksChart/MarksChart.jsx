import React, { use } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MarksChart = ({ fetchMarksData }) => {
  const marksDataRes = use(fetchMarksData);
  const marksData = marksDataRes.data;
  // console.log(marksData);

  // data structuring

  const structuringData = marksData.map((student) => {
    const studentData = {
      id: student.id,
      name: student.name,
      math: student.math,
      chemistry: student.chemistry,
      physics: student.physics,
    };
    const avg =
      (studentData.math + studentData.physics + studentData.chemistry) / 3;
    studentData.avg = avg;
    return studentData;
  });

//   console.log(structuringData);

  return (
    <div>
      <div className="container mx-auto mt-10 flex gap-30 items-center">
        <BarChart width={800} height={500} data={structuringData}>
          <CartesianGrid></CartesianGrid>
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Bar dataKey="chemistry" fill="tomato"></Bar>
          <Bar dataKey="math" fill="violet"></Bar>
          <Bar dataKey="physics" fill="purple"></Bar>
          <Bar dataKey="avg" fill="blue"></Bar>
          <Tooltip></Tooltip>
          <Legend></Legend>
        </BarChart>
        <div>
          <li className="text-amber-600 text-2xl font-extrabold">Chemistry</li>
          <li className="text-fuchsia-500 text-2xl font-extrabold">Math</li>
          <li className="text-fuchsia-900 text-2xl font-extrabold">Physics</li>
          <li className="text-blue-800 text-2xl font-extrabold">Average</li>
        </div>
      </div>
    </div>
  );
};

export default MarksChart;
