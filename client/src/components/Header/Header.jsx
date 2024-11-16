import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-5 shadow-md sticky top-0 bg-white z-10">
      <h4 className="text-2xl font-semibold">Dashboard</h4>
      <img src="/profile.jpeg" className="w-[40px] h-[40px] rounded-full"></img>
    </div>
  );
}
