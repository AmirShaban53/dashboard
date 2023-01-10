import TempCharts from "../components/tempCharts";
import LocationDetails from "../components/locationDetails";
import LineChart from "../components/lineChart";
import { useAppContext } from "../middleware/appContext";

export default function Home() {
  const { maxTemp, minTemp } = useAppContext();
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div className=" ">
      <LocationDetails />
      <TempCharts />
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
//   const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

//   const headers = { Authorization: `Bearer ${API_KEY}` };
//   const data = {}
//   const cartItems = await axios.get(`https://api.m3o.com/v1/weather/Forecast`, {
//     headers: headers,
//   });
//   return { props: { cartItems: cartItems.data } };
// };
