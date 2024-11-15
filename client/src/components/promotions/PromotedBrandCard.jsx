import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function PromotedBrandCard() {
  return (
    <div className="bg-[#4779CC08] p-3 flex justify-between items-center rounded-md  ">
      <p className="text-xl">1. Brand 1</p>
      <button className="w-[30px] h-[30px] flex justify-center items-center bg-white rounded-full">
        <RiDeleteBin5Line />
      </button>
    </div>
  );
}
