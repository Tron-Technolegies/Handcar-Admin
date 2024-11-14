import React from "react";
import SearchBox from "../SearchBox";

export default function UserPageHeader() {
  return (
    <div className=" mb-10">
      <h4 className="text-2xl font-semibold">All Users</h4>
      <SearchBox />
    </div>
  );
}
