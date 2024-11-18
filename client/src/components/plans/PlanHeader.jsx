import React from "react";
import SearchBox from "../SearchBox";
import AddButton from "../AddButton";

export default function PlanHeader() {
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">All Plans</h4>
      <div className="flex sm:flex-row flex-col-reverse sm:gap-2 gap-5 justify-end sm:items-center items-start sm:my-0 my-5">
        <SearchBox />
        <AddButton route={"/plans/new"} title={"Add Plan"} />
      </div>
    </div>
  );
}
