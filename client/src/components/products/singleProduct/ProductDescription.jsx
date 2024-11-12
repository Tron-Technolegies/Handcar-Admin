import React from "react";
import { Link } from "react-router-dom";

export default function ProductDescription() {
  return (
    <div className="my-10 flex flex-col gap-5">
      <h4 className="text-lg">Description</h4>
      <div className="bg-[#F5F5F5] px-4 py-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <div className="flex items-center gap-5 justify-end">
        <Link
          to={"/products/1/edit"}
          className="bg-black px-4 py-2 rounded-md text-white"
        >
          Edit
        </Link>
        <button className="bg-red-600 px-4 py-2 rounded-md text-white">
          Delete
        </button>
      </div>
    </div>
  );
}
