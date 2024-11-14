import React from "react";
import SearchBox from "../SearchBox";

const list = ["Vendor", "User"];

export default function LogHeader() {
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">Service Logs</h4>
      <div className="flex justify-end items-center gap-2 ">
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
