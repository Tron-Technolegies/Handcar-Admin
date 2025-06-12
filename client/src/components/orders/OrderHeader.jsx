import React, { useContext } from "react";
import SearchBox from "../SearchBox";
import { AdminContext } from "../../AdminContext";

export default function OrderHeader({ search, setSearch }) {
  const { setRefetchTrigger, refetchTrigger } = useContext(AdminContext);
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">All Orders</h4>
      <div className="flex sm:flex-row flex-col-reverse sm:gap-2 gap-5 justify-end sm:items-center items-start sm:my-0 my-5">
        <SearchBox
          value={search}
          onchange={(e) => setSearch(e.target.value)}
          submit={() => setRefetchTrigger(!refetchTrigger)}
        />
      </div>
    </div>
  );
}
