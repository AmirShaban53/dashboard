import { Dehaze } from "@mui/icons-material";
import { FC, useState } from "react";
import { useAppContext } from "../middleware/appContext";

const HeaderBar: FC = () => {
  const { handleActiveLocation, handleMobileNav } = useAppContext();

  const [input, setInput] = useState("");
  return (
    <div className="p-2 md:p-4 border-b border-zinc-800 flex justify-between items-center md:block">
      <form
        action=""
        onSubmit={(e) => {
          handleActiveLocation(e, input);
          setInput("");
        }}
      >
        <input
          type="text"
          placeholder="search location"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=" p-2 outline-none bg-transparent border rounded-full border-fuchsia-400 text-sm"
        />
        <button
          type="submit"
          className="capitalize bg-gradient-to-r from-blue-500 to-fuchsia-300 px-4 py-2 mx-2 md:mx-4 rounded-full text-sm"
        >
          search
        </button>
      </form>
      <div className="md:hidden">
        <Dehaze onClick={() => handleMobileNav()} />
      </div>
    </div>
  );
};

export default HeaderBar;
