import React, { useContext } from "react";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import { navItems } from "../../utils/NavItems";
import { RiCloseFill } from "react-icons/ri";
import { AdminContext } from "../../AdminContext";
import { motion } from "framer-motion";
import { IoIosLogOut } from "react-icons/io";

export default function SmallScreenBar() {
  const { setShowSmallBar } = useContext(AdminContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowSmallBar(false)}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="xl:w-1/3 md:w-1/2 sm:w-3/4 w-11/12 mx-auto h-[500px] rounded-lg flex flex-col gap-5 items-center bg-white border border-[#A5A5A5] py-5"
      >
        <div className="w-full p-5 overflow-y-scroll">
          <div className="flex justify-end">
            <button onClick={() => setShowSmallBar(false)} className="">
              <RiCloseFill />
            </button>
          </div>
          <div className="border-b pb-3">
            <img src="/logo.png" className="w-[180px]"></img>
          </div>
          <div className="my-7 flex flex-col gap-2">
            <NavLink
              onClick={() => setShowSmallBar(false)}
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
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#6a6969] hover:text-black hover:bg-[#FAEBEB] ease-in-out duration-500">
              <IoIosLogOut />
              Logout
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
