import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function GoBack({ route }) {
  return (
    <Link
      to={route}
      className="px-4 py-2 rounded-md bg-black text-white flex gap-2 items-center"
    >
      <span>
        <IoIosArrowRoundBack />
      </span>
      Go Back
    </Link>
  );
}
