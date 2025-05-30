import React from "react";
import { Link } from "react-router-dom";
import GoBack from "../../GoBack";

export default function AddNewProductHeader() {
  return (
    <div className="flex sm:flex-row flex-col-reverse justify-between items-start sm:items-center sm:gap-0 gap-5">
      <h4 className="text-xl font-semibold">Add a new Product</h4>
      <GoBack route={"/products"} />
    </div>
  );
}
