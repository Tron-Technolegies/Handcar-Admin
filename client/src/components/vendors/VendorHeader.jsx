import React, { useContext } from "react";
import SearchBox from "../SearchBox";
import AddButton from "../AddButton";
import { AdminContext } from "../../AdminContext";

export default function VendorHeader({ search, setSearch }) {
  const { refetchTrigger, setRefetchTrigger } = useContext(AdminContext);
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">All Service Providers</h4>
      <div className="flex sm:flex-row flex-col-reverse justify-end sm:items-center items-start sm:gap-3 gap-5 sm:my-0 my-5">
        <SearchBox
          value={search}
          onchange={(e) => setSearch(e.target.value)}
          submit={() => setRefetchTrigger(!refetchTrigger)}
        />
        <AddButton route={"/services/new"} title={"Add Vendor"} />
      </div>
    </div>
  );
}
