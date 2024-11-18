import React from "react";
import SearchBox from "../SearchBox";
import AddButton from "../AddButton";

export default function VendorHeader() {
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">All Service Providers</h4>
      <div className="flex sm:flex-row flex-col-reverse justify-end sm:items-center items-start sm:gap-3 gap-5 sm:my-0 my-5">
        <SearchBox />
        <AddButton route={"/services/new"} title={"Add Vendor"} />
      </div>
    </div>
  );
}
