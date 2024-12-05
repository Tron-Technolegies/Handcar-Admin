import React, { useState } from "react";
import CategoryHeader from "../../components/category/CategoryHeader";
import CategoryTable from "../../components/category/CategoryTable";

export default function CategoryPage() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <CategoryHeader search={search} setSearch={setSearch} />
      <CategoryTable search={search} />
    </div>
  );
}
