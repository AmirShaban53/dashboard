import { FC, useEffect, useRef } from "react";
import type { ChartData, ChartArea } from "chart.js";
import { Chart as ChartJS } from "chart.js";
import { Chart } from "react-chartjs-2";
import { useState } from "react";

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  // maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        color: "white",
        callback: (value: number | string) => {
          return `${value} C`;
        },
      },
      grid: {
        display: false,
      },
    },
    x: {
      ticks: {
        color: "white",
        display: false,
      },

      grid: {
        display: false,
      },
    },
  },
};

type chartProps = {
  data: number[];
  color: string;
  label: string;
  labels: string[];
};

const SimpleLineChart: FC<chartProps> = ({ data, color, label, labels }) => {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<"line">>({
    datasets: [],
  });

  const createGradient = (ctx: CanvasRenderingContext2D, area: ChartArea) => {
    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
    gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
    gradient.addColorStop(1, color);

    return gradient;
  };

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const cData = {
      labels: labels,
      datasets: [
        {
          label: label,
          backgroundColor: createGradient(chart.ctx, chart.chartArea),
          borderColor: color,
          fill: true,
          data: data,
          tension: 0.3,
        },
      ],
    };

    setChartData(cData);
  }, [data]);

  return (
    <div className="rounded-xl bg-zinc-800 p-2 mx-4 flex-grow">
      <div>
        <p className="capitalize font-bold">{label} (C)</p>
      </div>
      <Chart
        className=""
        type="line"
        ref={chartRef}
        data={chartData}
        width={200}
        height={100}
        options={options}
      />
    </div>
  );
};

export default SimpleLineChart;
