import React, { useContext } from "react";
import SearchBox from "../SearchBox";
import { AdminContext } from "../../AdminContext";

export default function UserPageHeader({ search, setSearch }) {
  const { refetchTrigger, setRefetchTrigger } = useContext(AdminContext);
  return (
    <div className=" mb-10">
      <h4 className="text-2xl md:my-0 my-5 font-semibold">All Users</h4>
      <SearchBox
        value={search}
        onchange={(e) => setSearch(e.target.value)}
        submit={() => setRefetchTrigger(!refetchTrigger)}
      />
    </div>
  );
}
