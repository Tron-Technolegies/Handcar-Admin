import React from "react";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";
import StatElt from "./StatElt";
import Graph from "./Graph";
import MostViewedTable from "./MostViewedTable";
import LatestProducts from "./LatestProducts";
import useGetAllStats from "../../hooks/dashboard/useGetAllStats";
import Loading from "../Loading";

// const statData1 = [
//   {
//     icon: "/dashboard/icon-1.png",
//     title: "Services",
//     number: "6,580",
//     percent: "5%",
//     up: true,
//     dip: <HiMiniArrowTrendingUp />,
//   },
//   {
//     icon: "/dashboard/icon-2.png",
//     title: "Products Sold",
//     number: "5,679",
//     up: true,
//     percent: "2%",
//     dip: <HiMiniArrowTrendingUp />,
//   },
//   {
//     icon: "/dashboard/icon-3.png",
//     title: "Users",
//     number: "51,801",
//     up: false,
//     percent: "3%",
//     dip: <HiMiniArrowTrendingDown />,
//   },
// ];

export default function StatsSection() {
  const { loading, vendors, products, users, subscriptions } = useGetAllStats();
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3 place-items-center">
          <StatElt
            icon={"/dashboard/icon-1.png"}
            title={"Vendors"}
            number={vendors}
          />
          <StatElt
            icon={"/dashboard/icon-2.png"}
            title={"Products"}
            number={products}
          />
          <StatElt
            icon={"/dashboard/icon-3.png"}
            title={"Users"}
            number={users}
          />
          <StatElt
            icon={"/dashboard/icon-1.png"}
            title={"Subscriptions"}
            number={subscriptions}
          />
        </div>
      )}

      {/* <div className="flex xl:flex-row flex-col gap-2 my-10">
        <div className="flex flex-col justify-center gap-5 mx-auto">
          <p className="text-2xl font-semibold text-left w-full">Sales Data</p>
          <Graph />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-2xl font-semibold">Most Viewed</p>
          <MostViewedTable />
        </div>
      </div> */}
      <div className="flex flex-col gap-5">
        <h5 className="text-2xl font-semibold">Latest Products</h5>
        <LatestProducts />
      </div>
    </div>
  );
}
