import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AdminContext } from "../../AdminContext";

export default function NavItem({ icon, name, path, location }) {
  const { setShowSmallBar } = useContext(AdminContext);
  return (
    <NavLink
      onClick={() => setShowSmallBar(false)}
      to={path}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[#6a6969] hover:text-black hover:bg-[#FAEBEB] ease-in-out duration-500 ${
        location && location.includes(path) && "bg-[#FAEBEB] text-black"
      }`}
    >
      <p>{icon}</p>
      <p>{name}</p>
    </NavLink>
  );
}
