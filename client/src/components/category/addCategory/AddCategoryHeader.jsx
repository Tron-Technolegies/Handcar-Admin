import React from "react";
import GoBack from "../../GoBack";

export default function AddCategoryHeader() {
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">Add New Category</h4>
      <div className="flex justify-end">
        <GoBack route={"/category"} />
      </div>
    </div>
  );
}
