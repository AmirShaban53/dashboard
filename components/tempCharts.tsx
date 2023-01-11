import { FC, useState, useEffect } from "react";
import SimpleLineChart from "./simpleLineChart";
import LineChart from "./lineChart";
import { useAppContext } from "../middleware/appContext";
import TempCard from "./tempCard";

const TempCharts: FC = () => {
  const { forecasts } = useAppContext();

  const [maxTemp, setMaxTemp] = useState<number[]>([]);
  const [minTemp, setMinTemp] = useState<number[]>([]);
  const [avgTemp, setAvgTemp] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  const [currentForecast, setCurrentForecast] = useState({});

  const setTemps = () => {
    setAvgTemp([]);
    setMinTemp([]);
    setMaxTemp([]);
    forecasts?.forEach((forecast: any) => {
      setMaxTemp((prev) => {
        return [...prev, forecast.max_temp_c];
      });
      setMinTemp((prev) => {
        return [...prev, forecast.min_temp_c];
      });
      setAvgTemp((prev) => {
        return [...prev, forecast.avg_temp_c];
      });
    });
  };

  const handleLabels = () => {
    setLabels([]);
    forecasts?.forEach((forecast: any) => {
      const date = new Date(forecast.date);
      const day = date.toLocaleString("en-us", { weekday: "long" });
      setLabels((prev) => {
        return [...prev, day];
      });
    });
  };

  const handleCurrentData = () => {
    if (forecasts?.length > 0) setCurrentForecast(forecasts[0]);
  };

  const dataSets = [
    { data: minTemp, color: "cyan", label: "min temperature" },
    { data: avgTemp, color: "blue", label: "avg temperature" },
    { data: maxTemp, color: "red", label: "max temperature" },
  ];
  useEffect(() => {
    setTemps();
    handleLabels();
    handleCurrentData();
  }, [forecasts]);

  return (
    <div className="">
      <div className="flex justify-between mb-10 w-screen md:w-auto overflow-x-scroll no-scroll">
        <SimpleLineChart
          data={minTemp}
          color="cyan"
          label="min Temp"
          labels={labels}
        />
        <SimpleLineChart
          data={avgTemp}
          color="blue"
          label="avrage Temp"
          labels={labels}
        />
        <SimpleLineChart
          data={maxTemp}
          color="red"
          label="max Temp"
          labels={labels}
        />
      </div>
      <div className="md:flex p-4 w-screen md:w-auto">
        <div className="bg-zinc-800 rounded-xl mb-4 md:mr-8 p-4 basis-4/6">
          <LineChart dataSet={dataSets} labels={labels} />
        </div>
        <div className="flex-grow mb-4">
          <TempCard currentData={currentForecast} />
        </div>
      </div>
    </div>
  );
};

export default TempCharts;
