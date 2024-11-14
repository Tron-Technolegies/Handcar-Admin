import React from "react";
import GoBack from "../../GoBack";

export default function EditBrandHeader() {
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">Edit Brand</h4>
      <div className="flex justify-end">
        <GoBack route={"/brand"} />
      </div>
    </div>
  );
}
