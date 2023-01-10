import { FC } from "react";
import Image from "next/image";
import { useAppContext } from "../middleware/appContext";

type IconProps = {
  percentages?: number[];
  icons: string[];
  labels?: string[];
};

const IconList: FC<IconProps> = ({ icons, labels, percentages }) => {
  return (
    <div className="flex p-4 justify-between">
      {icons.map((icon, index) => {
        if (labels?.length && percentages?.length)
          return (
            <IconItem
              icon={icon}
              label={labels[index]}
              percentage={percentages[index]}
            />
          );
      })}
    </div>
  );
};

const IconItem: FC<{ icon?: string; label?: string; percentage?: number }> = ({
  icon,
  label,
  percentage,
}) => {
  return (
    <div className=" p-4 grow mx-2 rounded-xl bg-gradient-to-tr from-blue-500 to-fuchsia-300">
      <div className="relative h-16 w-16 mx-auto">
        <Image
          src={`https:${icon}`}
          alt="clouds icon"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="text-center">
        <p className="text-2xl">{percentage}% </p>
        <p className="text-sm italic text-zinc-200">{label} </p>
      </div>
    </div>
  );
};

export default IconList;
