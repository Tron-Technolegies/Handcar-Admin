import React, { useState } from "react";
import PlanHeader from "../../components/plans/PlanHeader";
import PlanTable from "../../components/plans/PlanTable";

export default function PlansPage() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <PlanHeader search={search} setSearch={setSearch} />
      <PlanTable search={search} />
    </div>
  );
}
