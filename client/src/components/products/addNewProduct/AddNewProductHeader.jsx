import React from "react";
import { Link } from "react-router-dom";
import GoBack from "../../GoBack";

export default function AddNewProductHeader() {
  return (
    <div className="flex justify-between items-center">
      <h4 className="text-xl font-semibold">Add a new Product</h4>
      <GoBack route={"/products"} />
    </div>
  );
}
