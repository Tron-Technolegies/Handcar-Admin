import React from "react";
import GoBack from "../../GoBack";

export default function EditProductHeader() {
  return (
    <div className="flex justify-between items-center">
      <h4 className="text-xl font-semibold">Edit Product</h4>
      <GoBack route={"/products/1"} />
    </div>
  );
}
