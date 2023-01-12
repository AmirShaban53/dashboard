import UsersTable from "../../components/usersTable";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>QW | users</title>
        <meta
          name="description"
          content="quick-weather is an webapp to instantly view the weather of any location in the world within seconds without any gps required."
        />
      </Head>
      <div className=" ">
        <UsersTable />
      </div>
    </>
  );
}
