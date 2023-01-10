import { FC, useState } from "react";
import { useAppContext } from "../middleware/appContext";

const HeaderBar: FC = () => {
  const { handleActiveLocation } = useAppContext();

  const [input, setInput] = useState("");
  return (
    <div className="p-4 border-b border-zinc-800">
      <form
        action=""
        onSubmit={(e) => {
          handleActiveLocation(e, input);
          setInput("")
        }}
      >
        <input
          type="text"
          placeholder="search location"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=" p-2 outline-none bg-transparent border rounded-full border-fuchsia-400"
        />
        <button
          type="submit"
          className="capitalize bg-gradient-to-r from-blue-500 to-fuchsia-300 px-4 py-2 mx-4 rounded-full"
        >
          search
        </button>
      </form>
    </div>
  );
};

export default HeaderBar;
