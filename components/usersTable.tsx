import { FC, useState } from "react";
import Image from "next/image";

const UsersTable: FC = () => {
  const [userData, setUserData] = useState(users);

  return (
    <div className="bg-zinc-800 m-4 p-4 rounded-xl">
      <div className="mb-4 flex justify-between">
        <div>
          <p className="uppercase text-3xl font-bold">our team</p>
          <p className="text-sm text-zinc-400 italic">
            Meet the people bringing all this data together
          </p>
        </div>
        <div>
          <button className="hidden md:block capitalize bg-gradient-to-r from-blue-500 to-fuchsia-300 px-4 py-2 rounded-full">
            add user
          </button>
        </div>
      </div>
      <table className="w-full rounded-xl  pb-2 text-left">
        <thead>
          <tr className="border-b border-zinc-500">
            <th className="py-4">user</th>
            <th className="py-4 hidden md:block">location</th>
            <th className="py-4">active</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => {
            return <UserRow {...user} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

type UserProps = {
  src: string;
  name: string;
  email: string;
  location: string;
  active: boolean;
};
const UserRow: FC<UserProps> = ({ src, name, email, location, active }) => {
  return (
    <tr className="hover:bg-zinc-600 transition-all duration-300">
      <td className=" py-2 md:py-4 flex items-center">
        <div className="relative h-16 w-16 mr-2 md:mx-2  ">
          <Image
            className={`rounded-full border-2 border-fuchsia-300 p-1`}
            src={src}
            fill
            alt="this and that"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="">
          <p className="capitalize">{name}</p>
          <p className="italic hidden text-sm text-gray-400">{email}</p>
        </div>
      </td>
      <td className="hidden">
        <p className="capitalize">{location}</p>
      </td>
      <td>
        {active ? (
          <p className="bg-green-500 w-fit px-2 rounded-full">online</p>
        ) : (
          <p className="bg-zinc-500 w-fit px-2 rounded-full">offline</p>
        )}
      </td>
    </tr>
  );
};

const users = [
  {
    src: "/images/emmly.jpg",
    name: "melissa Pennyworth",
    email: "melissapen@gmail.com",
    location: "london",
    active: true,
  },
  {
    src: "/images/user01.jpg",
    name: "Marie Gwenvia",
    email: "marie18@gmail.com",
    location: "France",
    active: false,
  },
  {
    src: "/images/user02.jpg",
    name: "Tonny Blair",
    email: "blairT@gmail.com",
    location: "new york",
    active: false,
  },
  {
    src: "/images/user03.jpg",
    name: "amir shaban",
    email: "melissapen@gmail.com",
    location: "nevada",
    active: true,
  },
];

export default UsersTable;
