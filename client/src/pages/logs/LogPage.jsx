import React, { useState } from "react";
import LogHeader from "../../components/logPage/LogHeader";
import LogTable from "../../components/logPage/LogTable";

export default function LogPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("Vendor");
  return (
    <div>
      <LogHeader search={search} setSearch={setSearch} />
      <LogTable search={search} type={type} />
    </div>
  );
}
