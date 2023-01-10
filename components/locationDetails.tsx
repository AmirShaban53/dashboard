import { FC } from "react";
import { useAppContext } from "../middleware/appContext";

const LocationDetails: FC = () => {
  const { locationDetails } = useAppContext();
  const time = locationDetails?.local_time.split(" ")[1];
  const date = locationDetails?.local_time.split(" ")[0];
  return (
    <div className="mb-4 p-4 flex justify-between">
      <div>
        <p>{locationDetails?.location}</p>
        <p>{locationDetails?.region}</p>
        <p>{locationDetails?.country}</p>
      </div>
      <div className="text-right">
        <p>{time}</p>
        <p>{date}</p>
        <p>{locationDetails?.timezone}</p>
      </div>
    </div>
  );
};

export default LocationDetails;
