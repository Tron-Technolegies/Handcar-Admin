import React from "react";
import { navItems } from "../../utils/NavItems";
import NavItem from "./NavItem";
import { NavLink, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

export default function SideBar() {
  const location = useLocation();

  return (
    <div className="w-[300px] p-5 flex flex-col gap-7 border shadow-lg min-h-screen">
      <div className="border-b pb-3">
        <img src="/logo.png" className="w-[180px]"></img>
      </div>
      <div className="my-7 flex flex-col gap-2">
        <NavLink
          to={"/"}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[#6a6969] hover:text-black hover:bg-[#FAEBEB] ease-in-out duration-500 ${
            location.pathname === "/" && "bg-[#FAEBEB] text-black"
          }`}
        >
          <p>
            <MdDashboard />
          </p>
          <p>Dashboard</p>
        </NavLink>
        {navItems.map((x) => (
          <NavItem
            key={x.id}
            icon={x.icon}
            name={x.name}
            path={x.path}
            location={location?.pathname}
          />
        ))}
      </div>
    </div>
  );
}
