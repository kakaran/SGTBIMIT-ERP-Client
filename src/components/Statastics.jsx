import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  stacked: false,

  plugins: {
    title: {
      display: false, // Hide the title
    },
  },

  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Dataset 1",
      data: Array.from({ length: 6 }, () =>
        Math.floor(Math.random() * 2000 - 1000)
      ),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: Array.from({ length: 6 }, () =>
        Math.floor(Math.random() * 2000 - 1000)
      ),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function Statastics() {
  return (
    <div className="w-full rounded-lg border p-6  bg-white h-[384px] ">
      <p>Statistics</p>
      <div className="w-full h-[300px]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
