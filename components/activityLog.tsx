import { FC } from "react";

const ActivityLog: FC = () => {
  return (
    <div className="rounded-xl bg-zinc-800 p-2">
      <div className="mb-4">
        <p className="uppercase font-bold ">Recent Activities</p>
      </div>
      <div>
        <Activity activity="Add new user" date="today"/>
        <Activity activity="Update account name" date="yesterday"/>
        <Activity activity="Created account" date="05 / 01 / 2023"/>
        <Activity activity="Update theme setting" date="30 / 12 / 2022"/>
      </div>
    </div>
  );
};

const Activity: FC<{activity: string, date: string}> = ({activity, date}) => {
  return (
    <div className="border-dashed border-l ml-4 pl-6 py-2 relative">
      <p>{activity}</p>
      <p className="italic text-zinc-400 text-xs">{date}</p>
      <div className="rounded-full absolute bg-green-500 h-4 w-4 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2"></div>
    </div>
  );
};

export default ActivityLog;
