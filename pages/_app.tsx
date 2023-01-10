import "../styles/globals.css";
import { AppProps } from "next/app";
import SideBar from "../components/sidebar";
import HeaderBar from "../components/headerbar";
import UserList from "../components/usersList";
import ActivityLog from "../components/activityLog";
import { Chart as ChartJS, registerables } from "chart.js";
import { ContextProvider } from "../middleware/appContext";
import LocationDetails from "../components/locationDetails";

ChartJS.register(...registerables);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ContextProvider>
        <div className="flex h-screen bg-zinc-900 text-slate-50 overflow-y-hidden">
          <div className="basis-1/5 bg-zinc-800">
            <SideBar />
          </div>
          <div className="grow ">
            <HeaderBar />
            <div className="md:flex  md:flex-row-reverse">
              <div className=" basis-1/4 p-4 border-l border-zinc-800">
                <UserList />
                <ActivityLog />
              </div>
              <div className="grow h-screen overflow-y-scroll no-scroll pb-20">
                <LocationDetails />

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
