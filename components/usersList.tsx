import { FC, useState } from "react";
import Image from "next/image";

const UserList: FC = () => {
  const [userData, setUserData] = useState(users);

  return (
    <div className="rounded-xl bg-zinc-800 p-2 mb-4">
      <div className="mb-4">
        <p className="uppercase font-bold">our team</p>
      </div>
      <div className="flex justify-around md:block">
        {userData.map((user, index)=> {
          return <User key={index} {...user}/>
        })}
      </div>
    </div>
  );
};

export default UserList;

const User: FC<{name: string; src: string; active: boolean }> = ({name, src, active }) => {
  return (
    <div className="">
      <div className="mb-4 md:flex items-center">
        <div className="relative mx-auto md:mx-2 h-12 w-12">
          <Image
            className={`rounded-full border-2 border-fuchsia-300 p-1`}
            src={src}
            fill
            alt="this and that"
            style={{objectFit: "cover"}}
          />
          <div
            className={`h-3 w-3 ${
              active ? "bg-green-500" : "bg-gray-300"
            } absolute right-1 bottom-0 rounded-full`}
          ></div>
        </div>
        <div className="text-center md:text-left">
          <p className="hidden md:block text-xs sm:text-sm font-bold italic capitalize">
            {name}
          </p>
          <p className="italic text-gray-500 text-sm">
            {active ? "online" : "offline"}
          </p>
        </div>
      </div>
    </div>
  );
};


const users = [
  {
    src: "/images/emmly.jpg",
    name: "melissa Pennyworth",
    active: true,
  },
  {
    src: "/images/user01.jpg",
    name: "Marie Gwenvia",
    active: false,
  },
  {
    src: "/images/user02.jpg",
    name: "Tonny Blair",
    active: false,
  },
  {
    src: "/images/user03.jpg",
    name: "amir shaban",
    active: true,
  },
];