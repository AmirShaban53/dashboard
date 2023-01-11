import { FC } from "react";
import { useAppContext } from "../middleware/appContext";

const LocationDetails: FC = () => {
  const { locationDetails } = useAppContext();
  const time = locationDetails?.local_time.split(" ")[1];
  const date = locationDetails?.local_time.split(" ")[0];
  const dateFormated = new Date(date);
  return (
    <div className="my-4 p-4 flex justify-between">
      <div className="">
        <p className="text-2xl sm:text-3xl font-bold uppercase">{locationDetails?.location}</p>
        <p className="text-sm sm:text-base italic text-zinc-400">{locationDetails?.country}</p>
      </div>
      <div className="text-right border-l pl-2 border-zinc-700">
        <p className=" sm:text-xl ">{dateFormated.toDateString()}</p>
        <p className="italic text-zinc-400 text-xs sm:text-sm">
          {time} ({locationDetails?.timezone})
        </p>
      </div>
    </div>
  );
};

export default LocationDetails;
