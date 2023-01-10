import { FC } from "react";
import Image from "next/image";

const UserList: FC = () => {
  return (
    <div className="">
      <div className="mb-4">
        <p className="uppercase font-bold">our team</p>
      </div>
      <div className="flex md:block">
        <User active={true} />
        <User active={true} />
        <User active={false} />
        <User active={true} />
      </div>
    </div>
  );
};

export default UserList;

const User: FC<{ active?: boolean }> = ({ active }) => {
  return (
    <div>
      <div className=" m-2 ">
        <div className="relative mx-auto w-fit">
          <Image
            className={`rounded-full border-2 ${
              active ? "border-green-200" : "border-green-200"
            } p-1`}
            src="/images/emmly.jpg"
            width={50}
            height={50}
            alt="this and that"
          />
          <div
            className={`h-3 w-3 ${
              active ? "bg-green-500" : "bg-gray-300"
            } absolute right-1 bottom-0 rounded-full`}
          ></div>
        </div>
        <div className="text-center">
          <p className=" text-xs font-bold italic">Lorem, ipsum.</p>
          {/* <p className="italic text-gray-500 text-sm">
            {active ? "online" : "offline"}
          </p> */}
        </div>
      </div>
    </div>
  );
};
