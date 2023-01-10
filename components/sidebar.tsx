import { FC } from "react";
import UserDetails from "./userDetails";
import NavMenu from "./navMenu";
const SideBar: FC = () => {
  return (
    <div className="">
      <UserDetails />
      <NavMenu />
    </div>
  );
};

export default SideBar;
