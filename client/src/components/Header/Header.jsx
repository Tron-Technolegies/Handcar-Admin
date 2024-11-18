import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AdminContext } from "../../AdminContext";

export default function Header() {
  const { setShowSmallBar } = useContext(AdminContext);
  return (
    <div className="flex justify-between items-center p-5 shadow-md sticky top-0 bg-white z-10">
      <h4 className="text-2xl lg:block hidden font-semibold">Dashboard</h4>
      <button
        className="lg:hidden text-3xl"
        onClick={() => setShowSmallBar(true)}
      >
        <GiHamburgerMenu />
      </button>
      <img src="/profile.jpeg" className="w-[40px] h-[40px] rounded-full"></img>
    </div>
  );
}
