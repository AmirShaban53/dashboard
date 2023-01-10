import "../styles/globals.css";
import { AppProps } from "next/app";
import SideBar from "../components/sidebar";
import HeaderBar from "../components/headerbar";
import UserList from "../components/usersList";
import { Chart as ChartJS, registerables } from "chart.js";
import { ContextProvider } from "../middleware/appContext";

ChartJS.register(...registerables);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ContextProvider>
        <div className="flex h-screen overflow-y-hidden bg-zinc-900 text-slate-50">
          <div className="basis-1/5 bg-zinc-800">
            <SideBar />
          </div>
          <div className="grow">
            <HeaderBar />
            <div className="md:flex h-full md:flex-row-reverse overflow-hidden ">
              <div className=" basis-1/4">
                <UserList />
              </div>
              <div className="grow h-full overflow-y-scroll no-scroll">
                <Component {...pageProps} />
              </div>
            </div>
          </div>
        </div>
      </ContextProvider>
    </>
  );
}

export default MyApp;
