import React from "react";
import SearchBox from "../SearchBox";
import AddButton from "../AddButton";

export default function VendorHeader() {
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">All Service Providers</h4>
      <div className="flex justify-end items-center gap-3">
        <SearchBox />
        <AddButton route={"/services/new"} title={"Add Vendor"} />
      </div>
    </div>
  );
}
