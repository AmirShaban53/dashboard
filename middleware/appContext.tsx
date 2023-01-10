import { ReactNode } from "react";
import { FC } from "react";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const Context = createContext<any>({});

export const useAppContext = () => {
  return useContext(Context);
};

type LineData = {
  data: number[];
  labels: string[];
};

type Location = {
  location: string;
  country: string;
  region: string;
  timezone: string;
  local_time: string;
};

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [maxTemp, setMaxTemp] = useState<number[]>([]);
  const [minTemp, setMinTemp] = useState<number[]>([]);
  const [avgTemp, setAvgTemp] = useState<number[]>([]);

  const [forecasts, setForecasts] = useState();
  const [locationDetails, setLocationDetails] = useState<Location>();

  const [activeLocation, setActiveLocation] = useState("kampala");

  const getData = async () => {
    try {
      const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
      const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

      const headers = { Authorization: `Bearer ${API_KEY}` };
      const data = { location: activeLocation, days: 5 };
      const weatherData = await axios.post(`${BASE_URL}/Forecast`, data, {
        headers: headers,
      });

      if (weatherData !== null) {
        const { location, region, country, timezone, local_time } =
          weatherData.data;
        setLocationDetails({
          location,
          region,
          country,
          timezone,
          local_time,
        });
        setForecasts(weatherData.data.forecast);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const contextValue = {
    maxTemp,
    minTemp,
    avgTemp,
    forecasts,
    locationDetails,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
