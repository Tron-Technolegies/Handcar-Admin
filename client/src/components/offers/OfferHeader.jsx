import React from "react";
import AddButton from "../AddButton";

export default function OfferHeader() {
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">All Coupons</h4>
      <div className="flex gap-2 justify-end items-center">
        <AddButton route={"/offers/new"} title={"Add Coupons"} />
      </div>
    </div>
  );
}
