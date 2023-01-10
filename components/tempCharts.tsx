import { FC, useState, useEffect } from "react";
import SimpleLineChart from "./simpleLineChart";
import LineChart from "./lineChart";
import { useAppContext } from "../middleware/appContext";

const TempCharts: FC = () => {
  const { forecasts } = useAppContext();

  const [maxTemp, setMaxTemp] = useState<number[]>([]);
  const [minTemp, setMinTemp] = useState<number[]>([]);
  const [avgTemp, setAvgTemp] = useState<number[]>([]);

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

  const dataSets = [
    {data: maxTemp, color: 'red'},
    {data: minTemp, color: 'cyan'},
    {data: avgTemp, color: 'blue'},
  ]
  useEffect(() => {
    setTemps();
  }, []);

  return (
    <>
      <pre>{JSON.stringify(forecasts, undefined, 2)}</pre>
      <div className="flex ">
        <SimpleLineChart data={minTemp} color="cyan" label="min Temp" />
        <SimpleLineChart data={avgTemp} color="blue" label="avrage Temp" />
        <SimpleLineChart data={maxTemp} color="red" label="max Temp" />
      </div>
      <div>
        <LineChart dataSet={dataSets}  />
      </div>
    </>
  );
};

export default TempCharts;
