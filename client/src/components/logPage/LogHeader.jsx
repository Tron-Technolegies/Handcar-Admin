import React, { useContext } from "react";
import SearchBox from "../SearchBox";
import { AdminContext } from "../../AdminContext";

const list = ["Vendor", "Communication"];

export default function LogHeader({ search, setSearch, type, setType }) {
  const { refetchTrigger, setRefetchTrigger } = useContext(AdminContext);
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">Service Logs</h4>
      <div className="flex sm:flex-row flex-col justify-end sm:items-center items-start sm:gap-2 gap-5 sm:my-0 my-5">
        <select
          id="status"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={`py-2 px-3 rounded-lg bg-black border border-gray-300 text-white`}
        >
          {list?.map((item) => (
            <option
              className="border-b py-1  border-gray-300"
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
        <SearchBox
          value={search}
          onchange={(e) => setSearch(e.target.value)}
          submit={() => setRefetchTrigger(!refetchTrigger)}
        />
      </div>
    </div>
  );
}
