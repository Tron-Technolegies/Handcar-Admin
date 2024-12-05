import React, { useState } from "react";
import VendorHeader from "../../components/vendors/VendorHeader";
import VendorTable from "../../components/vendors/VendorTable";

export default function ServicePage() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <VendorHeader search={search} setSearch={setSearch} />
      <VendorTable search={search} />
    </div>
  );
}
