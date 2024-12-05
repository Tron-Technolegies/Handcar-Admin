import React, { useContext } from "react";

import SearchBox from "../SearchBox";
import AddButton from "../AddButton";
import { AdminContext } from "../../AdminContext";

export default function ProductsHeader({ search, setSearch }) {
  const { setRefetchTrigger, refetchTrigger } = useContext(AdminContext);
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">All Products</h4>
      <div className="flex md:flex-row flex-col-reverse md:my-0 my-5 gap-2 justify-end items-start md:items-center">
        <SearchBox
          value={search}
          onchange={(e) => setSearch(e.target.value)}
          submit={() => setRefetchTrigger(!refetchTrigger)}
        />
        <AddButton route={"/products/new"} title={"Add Product"} />
      </div>
    </div>
  );
}
