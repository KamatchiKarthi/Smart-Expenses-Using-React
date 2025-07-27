import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from 'chart.js/auto';


export default function CatageoryPieChart({ expenses = [] }) {
  const categories = expenses
    .map((e) => e.categeory)
    .filter((cat, index, arr) => arr.indexOf(cat) === index);

  console.log(categories);

  const data = {
    labels: categories,
    datasets: [
      {
        data: categories.map((cat) =>
          expenses
            .filter((e) => e.categeory === cat)
            .reduce((sum, e) => sum + e.amount, 0)
        ),
        backgroundColor: ["#6366f1", "#8b5cf6", "#ec4899", "#f43f5e", "#ff5d38" ],
      },
    ],
  };

  return (
    <div>
      <Pie className="!h-100 w-full" data={data} />
    </div>
  );
}
