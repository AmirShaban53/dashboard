import { FC } from "react";
import { Doughnut } from "react-chartjs-2";

const rawData = {
  labels: ["Red", "Green"],
  datasets: [
    {
      data: [50, 50],
      backgroundColor: ["#36A2EB", "gray"],
      hoverBackgroundColor: ["#36A2EB", "gray"],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
      labels: { color: "white" },
    },
  },
  responsive: true,
};

const DoughnutChart: FC<{ percentage: number }> = ({ percentage }) => {
  const data = {
    labels: ["Red", "Green"],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ["#36A2EB", "#ffffff00"],
        hoverBackgroundColor: ["#36A2EB", "#ffffff8c"],
        borderWidth: 0,
        borderRadius: 50,
        cutout: "80%",
      },
    ],
  };
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="text-center font-bold text-3xl md:text-6xl">
          {percentage} %
        </p>
      </div>
      <Doughnut data={data} width={300} height={300} options={options} />
    </div>
  );
};

export default DoughnutChart;
