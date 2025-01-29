import React, { useContext, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AdminContext } from "../../AdminContext";
export default function Header() {
  const { setShowSmallBar, user } = useContext(AdminContext);

  return (
    <div className="flex justify-between items-center p-5 shadow-md sticky top-0 bg-white z-10">
      <h4 className="text-2xl lg:block hidden font-semibold">Dashboard</h4>
      <button
        className="lg:hidden text-3xl"
        onClick={() => setShowSmallBar(true)}
      >
        <GiHamburgerMenu />
      </button>
      {user && (
        <p className="w-[40px] h-[40px] bg-black rounded-full text-white flex justify-center items-center text-lg">
          {user.username.slice(0, 1).toUpperCase()}
        </p>
      )}
    </div>
  );
}
