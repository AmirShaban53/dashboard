import { FC } from "react";
import Image from "next/image";

const UserDetails: FC = () => {
  return (
    <div className=" rounded-b-lg py-12">
      <div className="flex justify-center">
        <Image
          className="border-2 border-fuchsia-500 rounded-full p-1"
          src={"/images/emmly.jpg"}
          alt={"user only"}
          width={120}
          height={120}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="text-center py-4">
        <p className="uppercase text-sm font-bold">Melissa Pennyworth</p>
        <p className="italic text-sm text-gray-400">melissapen@gmail.com</p>
      </div>
    </div>
  );
};

export default UserDetails;
