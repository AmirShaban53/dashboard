import { FC, useEffect, useRef } from "react";
import type { ChartData, ChartArea } from "chart.js";
import { Chart as ChartJS } from "chart.js";
import { Chart } from "react-chartjs-2";
import { useState } from "react";

const createGradientCyan = (ctx: CanvasRenderingContext2D, area: ChartArea) => {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  gradient.addColorStop(0.35, "rgba(58, 255, 255, 0)");
  gradient.addColorStop(1, "rgba(58, 255, 255,1)");

  return gradient;
};
const createGradientRed = (ctx: CanvasRenderingContext2D, area: ChartArea) => {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  gradient.addColorStop(0.5, "rgba(255, 0, 0, 1)");
  gradient.addColorStop(0.1, "rgba(255, 0, 0, 0)");

  return gradient;
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        callback: (value: number | string) => {
          return `+${value}M`;
        },
      },
    },
  },
};

const LineChart: FC = () => {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<"line">>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const cData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "yearly sales",
          backgroundColor: createGradientRed(chart.ctx, chart.chartArea),
          fill: true,
          tension: 0.2,
          data: [55, 59, 50, 51, 52, 45, 30],
        },
        {
          label: "yearly sales",
          backgroundColor: createGradientCyan(chart.ctx, chart.chartArea),
          fill: true,
          tension: 0.2,
          data: [75, 79, 100, 101, 76, 75, 60],
        },
      ],
    };

    setChartData(cData);
  }, []);

  return (
    <div className="w-2/3">
      <Chart
        type="line"
        ref={chartRef}
        data={chartData}
        width={400}
        height={300}
        options={options}
      />
    </div>
  );
};

export default LineChart;
