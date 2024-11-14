import React from "react";
import GoBack from "../../GoBack";

export default function EditCategoryHeader() {
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">Edit Category</h4>
      <div className="flex justify-end">
        <GoBack route={"/category"} />
      </div>
    </div>
  );
}
