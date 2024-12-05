import React, { useState } from "react";

import ProductsHeader from "../../components/products/ProductsHeader";
import ProductTable from "../../components/products/ProductTable";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <ProductsHeader search={search} setSearch={setSearch} />
      <ProductTable search={search} />
    </div>
  );
}
