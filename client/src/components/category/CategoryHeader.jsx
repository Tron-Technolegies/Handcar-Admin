import React from "react";
import SearchBox from "../SearchBox";
import AddButton from "../AddButton";

export default function CategoryHeader() {
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">All Categories</h4>
      <div className="flex gap-2 justify-end items-center">
        <SearchBox />
        <AddButton route={"/category/new"} title={"Add Category"} />
      </div>
    </div>
  );
}
