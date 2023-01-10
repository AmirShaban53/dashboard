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
    },
  },
  responsive: true,
  // maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        color: "white",
        callback: (value: number | string) => {
          return `+${value}M`;
        },
      },
      grid: {
        display: false,
      },
    },
    x: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
};

type LineProps = { dataSet: { data: number[]; color: string }[] };
const LineChart: FC<LineProps> = ({ dataSet }) => {
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
      labels: ["January", "February", "March", "April", "May"],
      datasets: dataSet.map((data) => {
        return {
          backgroundColor: createGradient(
            chart.ctx,
            chart.chartArea,
            data.color
          ),
          borderColor: data.color,
          fill: true,
          tension: 0.1,
          data: data.data,
        };
      }),
    };

    setChartData(cData);
  }, [dataSet]);

  return (
    <div className="w-2/3 d">
      <Chart
        type="line"
        ref={chartRef}
        data={chartData}
        width={400}
        height={200}
        options={options}
      />
    </div>
  );
};

export default LineChart;
