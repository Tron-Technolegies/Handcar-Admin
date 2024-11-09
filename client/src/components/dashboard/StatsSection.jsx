import React from "react";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";
import StatElt from "./StatElt";
import Graph from "./Graph";
import MostViewedTable from "./MostViewedTable";
import LatestProducts from "./LatestProducts";

const statData1 = [
  {
    icon: "/dashboard/icon-1.png",
    title: "Services",
    number: "6,580",
    percent: "5%",
    up: true,
    dip: <HiMiniArrowTrendingUp />,
  },
  {
    icon: "/dashboard/icon-2.png",
    title: "Products Sold",
    number: "5,679",
    up: true,
    percent: "2%",
    dip: <HiMiniArrowTrendingUp />,
  },
  {
    icon: "/dashboard/icon-3.png",
    title: "Users",
    number: "51,801",
    up: false,
    percent: "3%",
    dip: <HiMiniArrowTrendingDown />,
  },
];

export default function StatsSection() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 place-items-center">
        {statData1.map((x, index) => (
          <StatElt
            key={index}
            icon={x.icon}
            title={x.title}
            number={x.number}
            dip={x.dip}
            up={x.up}
            percent={x.percent}
          />
        ))}
      </div>
      <div className="flex gap-2 my-10">
        <div className="flex flex-col gap-5">
          <p className="text-2xl font-semibold">Sales Data</p>
          <Graph />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-2xl font-semibold">Most Viewed</p>
          <MostViewedTable />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h5 className="text-2xl font-semibold">Latest Products</h5>
        <LatestProducts />
      </div>
    </div>
  );
}
