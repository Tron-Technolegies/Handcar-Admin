import React from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductsHeader() {
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">All Products</h4>
      <div className="flex gap-2 justify-end items-center">
        <input
          type="text"
          placeholder="search"
          className="px-2 py-2 rounded-lg bg-gray-200"
        ></input>
        <p className="bg-black text-white w-9 h-9 rounded-lg flex justify-center items-center">
          <FaSearch />
        </p>
        <Link
          to={"/products/new"}
          className="flex gap-2 items-center bg-black text-white rounded-lg px-4 py-2 text-sm hover:bg-gray-800 hover:scale-105 ease-in-out duration-300"
        >
          <span>
            <FaPlus />
          </span>
          Add Product
        </Link>
      </div>
    </div>
  );
}
