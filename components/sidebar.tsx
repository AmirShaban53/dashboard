import { FC } from "react";
import UserDetails from "./userDetails";
import NavMenu from "./navMenu";
import { useAppContext } from "../middleware/appContext";

const SideBar: FC = () => {
  const { mobileNavActive } = useAppContext();
  return (
    <div className={`bg-zinc-800 bg-opacity-60 backdrop-blur-md   ${mobileNavActive? "left-0": "-left-full"} transition-all duration-500 h-screen w-4/6 absolute z-10  md:relative md:basis-1/5 md:w-auto md:left-0`}>
      <UserDetails />
      <NavMenu />
    </div>
  );
};

export default SideBar;
