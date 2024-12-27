import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "../../../AdminContext";

export default function ProductDescription({ data, id }) {
  const { setShowDeletePopup } = useContext(AdminContext);
  return (
    <div className="my-10 flex flex-col gap-5">
      <h4 className="text-lg">Description</h4>
      <div className="bg-[#F5F5F5] px-4 py-2">{data.description}</div>
      <div className="flex items-center gap-5 justify-end">
        <Link
          to={`/products/${id}/edit`}
          className="bg-black px-4 py-2 rounded-md text-white"
        >
          Edit
        </Link>
        <button
          onClick={() => setShowDeletePopup(true)}
          className="bg-red-600 px-4 py-2 rounded-md text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
