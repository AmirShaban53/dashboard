import { ReactNode } from "react";
import { FC } from "react";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  FormEvent,
} from "react";
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
  const [forecasts, setForecasts] = useState();
  const [locationDetails, setLocationDetails] = useState<Location>();
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const [activeLocation, setActiveLocation] = useState("london");

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

  const handleActiveLocation = (
    e: FormEvent<HTMLFormElement>,
    input: string
  ) => {
    e.preventDefault();

    setActiveLocation(input);
  };

  const handleMobileNav = () => {
    setMobileNavActive((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    getData();
  }, [activeLocation]);

  const contextValue = {
    handleActiveLocation,
    handleMobileNav,
    forecasts,
    mobileNavActive,
    locationDetails,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
