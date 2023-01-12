import Head from "next/head";
import RainCharts from "../components/rainCharts";

export default function Home() {
  return (
    <>
    <Head>
        <title>QW | rain</title>
        <meta
          name="description"
          content="quick-weather is an webapp to instantly view the weather of any location in the world within seconds without any gps required."
        />
      </Head>
    <div className=" ">
      <RainCharts/>
    </div>
    </>
  );
}


