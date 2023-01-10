import { FC, useState, useEffect } from "react";
import SimpleLineChart from "./simpleLineChart";
import LineChart from "./lineChart";
import { useAppContext } from "../middleware/appContext";
import Image from "next/image";

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
      <div className="flex justify-between mb-10">
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
      <div className="flex p-4">
        <div className="bg-zinc-800 rounded-xl mr-8 p-4 basis-4/6">
          <div className="">
            <p className="text-2xl font-bold ">
              How's the temperature <br /> this week?
            </p>
          </div>
          <LineChart dataSet={dataSets} labels={labels} />
        </div>
        <div className="flex-grow">
          <TempCard currentData={currentForecast} />
        </div>
      </div>
    </div>
  );
};

export default TempCharts;

const TempCard: FC<{ currentData: any }> = ({ currentData }) => {
  const { locationDetails } = useAppContext();

  return (
    <div
      className={` bg-gradient-to-t ${
        currentData.will_it_rain ? "from-blue-500" : "from-amber-600"
      }   h-full rounded-xl p-4`}
    >
      <p className="italic">today in</p>
      <p className="font-bold text-2xl uppercase">
        {locationDetails?.location}
      </p>
      <div className="relative h-32">
        <Image
          src={`https:${currentData.icon_url}`}
          alt="clouds"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <p className="text-center font-bold text-4xl mb-4">
        {currentData.avg_temp_c} <sup>0</sup>C{" "}
      </p>
      <p className="italic text-sm text-center border-t pt-4">
        {currentData.condition}
      </p>
    </div>
  );
};
