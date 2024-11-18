import React from "react";
import SearchBox from "../SearchBox";

const list = ["Vendor", "User"];

export default function LogHeader() {
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">Service Logs</h4>
      <div className="flex sm:flex-row flex-col justify-end sm:items-center items-start sm:gap-2 gap-5 sm:my-0 my-5">
        <select
          id="status"
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
        <SearchBox />
      </div>
    </div>
  );
}
