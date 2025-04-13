import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const ResultData = () => {
  const resultData = [
    {
      id: 1,
      name: "Alice",
      physics: 85,
      math: 92,
      chemistry: 78,
    },
    {
      id: 2,
      name: "Bob",
      physics: 74,
      math: 88,
      chemistry: 69,
    },
    {
      id: 3,
      name: "Charlie",
      physics: 90,
      math: 95,
      chemistry: 93,
    },
    {
      id: 4,
      name: "Diana",
      physics: 68,
      math: 72,
      chemistry: 70,
    },
    {
      id: 5,
      name: "Ethan",
      physics: 80,
      math: 85,
      chemistry: 82,
    },
    {
      "id": 6,
      "name": "Fiona",
      "physics": 77,
      "math": 89,
      "chemistry": 84
    },
    {
      "id": 7,
      "name": "George",
      "physics": 91,
      "math": 87,
      "chemistry": 88
    },
    {
      "id": 8,
      "name": "Hannah",
      "physics": 73,
      "math": 79,
      "chemistry": 76
    }
  ];

  return (
    <div className="container mx-auto mt-10 flex gap-30 ">
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="chemistry" stroke="orange"></Line>
        <Line dataKey="math" stroke="green"></Line>
        <Line dataKey="physics" stroke="red"></Line>
      </LineChart>
      <div className="pt-10">
      <li className="text-green-600 text-2xl font-bold">Math</li>
      <li className="text-red-600 text-2xl font-bold">Physics</li>
      <li className="text-orange-400 text-2xl font-bold">Chemistry</li>
      </div>
    </div>
  );
};

export default ResultData;
