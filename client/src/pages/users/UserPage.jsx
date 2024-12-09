import React, { useState } from "react";
import UserPageHeader from "../../components/users/UserPageHeader";
import UserPageTable from "../../components/users/UserPageTable";

export default function UserPage() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <UserPageHeader search={search} setSearch={setSearch} />
      <UserPageTable search={search} />
    </div>
  );
}
