import React, { useState } from "react";
import SearchList from "./SearchList";
import useGetAllProducts from "../../hooks/products/useGetAllProducts";

export default function PromotionHeader({ title, search, setSearch, type }) {
  const [showList, setShowList] = useState(false);
  const { loading, products, refetch } = useGetAllProducts({ search });
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">{title}</h4>
      <div className="flex sm:flex-row flex-col-reverse sm:gap-2 gap-5 justify-end sm:items-center items-start sm:my-0 my-5">
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search"
            className="px-4 py-2 border rounded-lg"
          ></input>
          <button
            onClick={() => {
              setShowList(true);
              refetch();
            }}
            className="px-4 py-2 border rounded-lg cursor-pointer bg-black text-white"
          >
            Search
          </button>
          {showList && <SearchList loading={loading} products={products} />}
        </div>
      </div>
    </div>
  );
}
