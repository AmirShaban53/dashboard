import { FC } from "react";
import Image from "next/image";
import { useAppContext } from "../middleware/appContext";
import DoughnutChart from "./doughnut";

const RainCard: FC<{ currentData: any }> = ({ currentData }) => {
  const { locationDetails } = useAppContext();

  return (
    <div
      className={`bg-gradient-to-t from-blue-500  h-full rounded-xl p-4`}
    >
      <p className="italic">today in</p>
      <p className="font-bold text-2xl uppercase">
        {locationDetails?.location}
      </p>
      {/* <p className="text-center font-bold text-6xl my-8 py-8 bg-gradient-to-tr from-blue-500 to-fuchsia-300 rounded-full">
        {currentData.chance_of_rain}%
      </p> */}
      <p className="italic text-sm text-center pt-4">
        <DoughnutChart percentage={currentData.chance_of_rain}/>
      chance of rain
      </p>
    </div>
  );
};

export default RainCard;
