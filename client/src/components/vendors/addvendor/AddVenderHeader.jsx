import React from "react";
import GoBack from "../../GoBack";

export default function AddVenderHeader() {
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">Add New Vendor</h4>
      <div className="flex justify-end">
        <GoBack route={"/services"} />
      </div>
    </div>
  );
}
