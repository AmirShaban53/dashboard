import TempCharts from "../../components/tempCharts";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>QW | temp</title>
        <meta
          name="description"
          content="quick-weather is an webapp to instantly view the weather of any location in the world within seconds without any gps required."
        />
      </Head>
      <div className=" ">
        <TempCharts />
      </div>
    </>
  );
}
