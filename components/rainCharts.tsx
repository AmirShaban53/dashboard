import { FC, useState, useEffect } from "react";
import BarChart from "./barChart";
import RainCard from "./rainCard";
import IconList from "./iconList";
import { useAppContext } from "../middleware/appContext";

const RainCharts: FC = () => {
  const { forecasts } = useAppContext();

  const [rainPercentage, setRainPercentage] = useState<number[]>([]);
  const [temperatures, setTemperatures] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [icons, setIcons] = useState<string[]>([]);

  const [currentForecast, setCurrentForecast] = useState({});

  const handleRainPecentage = () => {
    setRainPercentage([]);
    setIcons([]);
    forecasts?.forEach((forecast: any) => {
      setRainPercentage((prev) => {
        return [...prev, forecast.chance_of_rain];
      });
      setTemperatures((prev) => {
        return [...prev, forecast.avg_temp_c];
      });
      setIcons((prev) => {
        return [...prev, forecast.icon_url];
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

  useEffect(() => {
    handleRainPecentage();
    handleLabels();
    handleCurrentData();
  }, [forecasts]);

  return (
    <div>
      <IconList icons={icons} labels={labels} percentages={temperatures} />
      <div className="md:flex p-4 w-screen md:w-auto">
        <div className="bg-zinc-800 rounded-xl mb-4 md:mr-8  p-4 md:basis-4/6">
          <BarChart data={rainPercentage} labels={labels} />
        </div>
        <div className="md:flex-grow mb-4">
          <RainCard currentData={currentForecast} />
        </div>
      </div>
    </div>
  );
};

export default RainCharts;
