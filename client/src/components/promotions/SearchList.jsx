import React from "react";
import Loading from "../Loading";

const SearchList = ({ products, loading }) => {
  return (
    <div className="p-5 absolute top-12 shadow-lg w-full z-10 bg-white rounded-md">
      {loading ? (
        <Loading />
      ) : (
        products?.length > 0 &&
        products.map((x) => (
          <div key={x.id} className="flex justify-between gap-5">
            <p>{x.name}</p>
            <button className="">+</button>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchList;
