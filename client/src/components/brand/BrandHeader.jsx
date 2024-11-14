import React from "react";
import SearchBox from "../SearchBox";
import AddButton from "../AddButton";

export default function BrandHeader() {
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">All Brands</h4>
      <div className="flex gap-2 justify-end items-center">
        <SearchBox />
        <AddButton route={"/brand/new"} title={"Add Brand"} />
      </div>
    </div>
  );
}
