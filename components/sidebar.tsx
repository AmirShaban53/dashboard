import { FC } from "react";
import UserDetails from "./userDetails";
import Link from "next/link";
const SideBar: FC = () => {
  return (
    <div className="">
      <UserDetails />
      <div>
        <ul>
          <li>
            <Link href={"/"}>temp</Link>
          </li>
          <li>
            <Link href={"/rain"}>rain</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
