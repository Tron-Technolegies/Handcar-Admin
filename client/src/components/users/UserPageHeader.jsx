import React from "react";
import SearchBox from "../SearchBox";

export default function UserPageHeader() {
  return (
    <div className=" mb-10">
      <h4 className="text-2xl md:my-0 my-5 font-semibold">All Users</h4>
      <SearchBox />
    </div>
  );
}
