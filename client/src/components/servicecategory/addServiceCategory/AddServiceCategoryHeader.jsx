import React from "react";
import GoBack from "../../GoBack";

export default function AddServiceCategoryHeader() {
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">Add New Service Category</h4>
      <div className="flex justify-end">
        <GoBack route={"/service_category"} />
      </div>
    </div>
  );
}
