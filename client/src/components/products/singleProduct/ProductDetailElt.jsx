import React from "react";

export default function ProductDetailElt({ type, value }) {
  return (
    <div className="flex gap-5">
      <p className="w-[150px]">{type}</p>
      <p>:</p>
      <p className="w-[100px]">{value}</p>
    </div>
  );
}
