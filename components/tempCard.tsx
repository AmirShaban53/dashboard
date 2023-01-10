import { FC } from "react";
import Image from "next/image";
import { useAppContext } from "../middleware/appContext";

const TempCard: FC<{ currentData: any }> = ({ currentData }) => {
  const { locationDetails } = useAppContext();

  return (
    <div
      className={` bg-gradient-to-tr ${
        currentData.will_it_rain ? "from-blue-500 to-fuchsia-300" : "from-amber-600 to-fuchsia-200"
      }   h-full rounded-xl p-4`}
    >
      <p className="italic">today in</p>
      <p className="font-bold text-2xl uppercase">
        {locationDetails?.location}
      </p>
      <div className="relative h-32">
        <Image
          src={`https:${currentData.icon_url}`}
          alt="clouds icon"
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

export default TempCard;
