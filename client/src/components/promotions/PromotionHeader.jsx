import React from "react";

export default function PromotionHeader({ title }) {
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">{title}</h4>
      <div className="flex gap-2 justify-end items-center">
        <input
          type="text"
          placeholder="search"
          className="px-4 py-2 border rounded-lg"
        ></input>
        <button className="px-4 py-2 border rounded-lg cursor-pointer bg-black text-white">
          Add New
        </button>
      </div>
    </div>
  );
}
