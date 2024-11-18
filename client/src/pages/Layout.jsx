import React, { useContext } from "react";
import SideBar from "../components/sidebar/SideBar";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import DeletePopup from "../components/DeletePopup";
import { AdminContext } from "../AdminContext";
import SmallScreenBar from "../components/sidebar/SmallScreenBar";

export default function Layout() {
  const { setShowDeletePopup, showDeletePopup, showSmallBar } =
    useContext(AdminContext);
  return (
    <div className="flex">
      <div className="hidden lg:block">
        <SideBar />
      </div>

      <div className="w-full">
        <Header />
        {showDeletePopup && <DeletePopup setPopup={setShowDeletePopup} />}
        {showSmallBar && <SmallScreenBar />}
        <div className="p-5 mb-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
