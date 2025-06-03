import React from "react";
import GoBack from "../../GoBack";
import { useParams } from "react-router-dom";

export default function EditProductHeader() {
  const { id } = useParams();
  return (
    <div className="flex sm justify-between items-center">
      <h4 className="text-xl font-semibold">Edit Product</h4>
      <GoBack route={`/products/${id}`} />
    </div>
  );
}
