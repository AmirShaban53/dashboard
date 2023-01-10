import { FC, useEffect, useRef } from "react";
import type { ChartData, ChartArea } from "chart.js";
import { Chart as ChartJS } from "chart.js";
import { Chart } from "react-chartjs-2";
import { useState } from "react";

const createGradient = (ctx: CanvasRenderingContext2D, area: ChartArea) => {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  gradient.addColorStop(0.35, "rgba(58, 255, 255, 0)");
  gradient.addColorStop(1, "rgba(58, 255, 255,1)");

  return gradient;
};

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
      ticks: {
        color: "white",
        callback: (value: number | string) => {
          return `${value} C`;
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

type LineProps = {
  dataSet: { data: number[]; color: string; label: string }[];
  labels: string[];
};
const LineChart: FC<LineProps> = ({ dataSet, labels }) => {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<"line">>({
    datasets: [],
  });

  const createGradient = (
    ctx: CanvasRenderingContext2D,
    area: ChartArea,
    color: string
  ) => {
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
      datasets: dataSet.map((data) => {
        return {
          backgroundColor: createGradient(
            chart.ctx,
            chart.chartArea,
            data.color
          ),
          borderColor: data.color,
          fill: true,
          tension: 0.5,
          data: data.data,
          label: data.label,
        };
      }),
    };

    setChartData(cData);
  }, [dataSet]);

  return (
    <>
    
      <div className="mb-4">
        <p className="text-2xl font-bold ">
          How's the temperature <br /> this week?
        </p>
      </div>
      <div>
        <Chart
          type="line"
          ref={chartRef}
          data={chartData}
          width={400}
          height={200}
          options={options}
        />
      </div>
    </>
  );
};

export default LineChart;
