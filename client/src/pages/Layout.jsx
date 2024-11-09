import React from "react";
import SideBar from "../components/sidebar/SideBar";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full">
        <Header />
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
