import React, { useContext } from "react";
import SearchBox from "../SearchBox";
import AddButton from "../AddButton";
import { AdminContext } from "../../AdminContext";

export default function SubscriptionsHeader({ search, setSearch }) {
  const { refetchTrigger, setRefetchTrigger } = useContext(AdminContext);
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">All Subscribers</h4>
      <div className="flex sm:flex-row flex-col-reverse sm:gap-2 gap-5 justify-end sm:items-center items-start sm:my-0 my-5">
        <SearchBox
          value={search}
          onchange={(e) => setSearch(e.target.value)}
          submit={() => setRefetchTrigger(!refetchTrigger)}
        />
        <AddButton route={"/subscriptions/new"} title={"Add Subscriber"} />
      </div>
    </div>
  );
}
