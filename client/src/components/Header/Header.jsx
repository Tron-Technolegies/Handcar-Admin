import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-5 shadow-md">
      <h4 className="text-2xl font-semibold">Dashboard</h4>
      <img src="/profile.jpeg" className="w-[40px] h-[40px] rounded-full"></img>
    </div>
  );
}
