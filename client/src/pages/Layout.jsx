import React, { useContext } from "react";
import SideBar from "../components/sidebar/SideBar";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import DeletePopup from "../components/DeletePopup";
import { AdminContext } from "../AdminContext";

export default function Layout() {
  const { setShowDeletePopup, showDeletePopup } = useContext(AdminContext);
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>

      <div className="w-full">
        <Header />
        {showDeletePopup && <DeletePopup setPopup={setShowDeletePopup} />}
        <div className="p-5 mb-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
