import { FC } from "react";
import { Bar } from "react-chartjs-2";

const options = {
  plugins: {
    legend: {
      display: false,
      labels: { color: "white" },
    },
  },
  responsive: true,
  // maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: false,
      ticks: {
        color: "white",
        callback: (value: number | string) => {
          return `${value} %`;
        },
      },
      grid: {},
    },
    x: {
      ticks: {},
      grid: {},
    },
  },
};

type BarProps = {
  data: number[];
  labels: string[];
};
const BarChart: FC<BarProps> = ({ data, labels }) => {
  const dataRaw = {
    labels: labels,
    datasets: [
      {
        min: "50",
        label: "chance of rain",
        data: data,
        backgroundColor: "rgba(64, 64, 255, 0.5)",
        borderColor: "blue",
        borderWidth: 2,
        borderRadius: 5,
      },
    ],
  };
  return (
    <>
      <div className="mb-4">
        <p className="text-2xl font-bold ">
          How's the temperature <br /> this week?
        </p>
      </div>
      <div>
        <Bar data={dataRaw} width={400} height={200} options={options} />
      </div>
    </>
  );
};

export default BarChart;
