import React from "react";
import { BsDot } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const features = [
  "05/10/2024 04:00 – 09/10/2024 12:00",
  "Only for second order",
  "Cannot be combined with other discounts",
];

export default function SingleCoupon() {
  return (
    <div className="p-5 rounded-xl border border-[#ABABAB] flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h4 className="text-2xl font-bold">$10.00 OFF</h4>
          <p className="text-xl font-semibold">Coupon name</p>
        </div>
        <Link to={"/offers/1/edit"} className="text-3xl">
          <FiEdit />
        </Link>
      </div>
      <p className="text-[#163ED4]"> Code: NEWCUSTOMER_1234</p>
      <div>
        {features.map((x, index) => (
          <p className="flex gap-2 items-center text-[#8B94B2]">
            <span>
              <BsDot />
            </span>
            {x}
          </p>
        ))}
      </div>
    </div>
  );
}
