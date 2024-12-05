import React, { useState } from "react";
import BrandHeader from "../../components/brand/BrandHeader";
import BrandTable from "../../components/brand/BrandTable";

export default function BrandPage() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <BrandHeader search={search} setSearch={setSearch} />
      <BrandTable search={search} />
    </div>
  );
}
