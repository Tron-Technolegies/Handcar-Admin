import React from "react";

export default function StatElt({ icon, title, number, percent, dip, up }) {
  return (
    <div className="flex flex-col items-center gap-2 py-5 px-10 rounded-md shadow-md w-[250px]">
      <div className="flex gap-3 items-center">
        <img src={icon}></img>
        <p className="font-semibold">{title}</p>
      </div>
      <p className="text-3xl text-center font-bold">{number}</p>
      {/* <div className="flex gap-2 items-center">
        <p className={`${up ? "text-green-600" : "text-red-600"}`}>{dip}</p>
        <p className={`${up ? "text-green-600" : "text-red-600"}`}>{percent}</p>
        <p>in last 1 month</p>
      </div> */}
    </div>
  );
}
