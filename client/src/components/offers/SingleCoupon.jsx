import React, { useContext } from "react";
import { BsDot } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AdminContext } from "../../AdminContext";

export default function SingleCoupon({
  name,
  code,
  discount,
  id,
  start,
  end,
  desc,
}) {
  const { setShowDeletePopup, setDeleteId, setDeleteType } =
    useContext(AdminContext);
  return (
    <div className="p-5 rounded-xl border border-[#ABABAB] flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h4 className="text-2xl font-bold">{`$ ${discount}% OFF`}</h4>
          <p className="text-xl font-semibold">{name}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Link to={`/offers/${id}/edit`} className="text-3xl">
            <FiEdit />
          </Link>
          <button
            onClick={() => {
              setShowDeletePopup(true);
              setDeleteId(id);
              setDeleteType("coupon");
            }}
            className="text-4xl text-red-600"
          >
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
      <p className="text-[#163ED4]">{`Code: ${code}`}</p>
      <div>
        <li>Start: {start}</li>
        <li>End: {end}</li>
        <div dangerouslySetInnerHTML={{ __html: desc }}></div>
      </div>
    </div>
  );
}
