import TempCharts from "../components/tempCharts";
import RainCharts from "../components/rainCharts";

export default function Home() {
  return (
    <div className=" ">
      <RainCharts/>
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
