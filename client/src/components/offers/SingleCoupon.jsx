import React, { useContext } from "react";
import { BsDot } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AdminContext } from "../../AdminContext";

const features = [
  "05/10/2024 04:00 – 09/10/2024 12:00",
  "Only for second order",
  "Cannot be combined with other discounts",
];

export default function SingleCoupon() {
  const { setShowDeletePopup } = useContext(AdminContext);
  return (
    <div className="p-5 rounded-xl border border-[#ABABAB] flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h4 className="text-2xl font-bold">$10.00 OFF</h4>
          <p className="text-xl font-semibold">Coupon name</p>
        </div>
        <div className="flex gap-2 items-center">
          <Link to={"/offers/1/edit"} className="text-3xl">
            <FiEdit />
          </Link>
          <button
            onClick={() => setShowDeletePopup(true)}
            className="text-4xl text-red-600"
          >
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
      <p className="text-[#163ED4]"> Code: NEWCUSTOMER_1234</p>
      <div>
        {features.map((x, index) => (
          <p key={index} className="flex gap-2 items-center text-[#8B94B2]">
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
