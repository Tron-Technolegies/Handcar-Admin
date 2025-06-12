import React, { useState } from "react";
import OrderHeader from "../../components/orders/OrderHeader";
import OrderTable from "../../components/orders/OrderTable";

export default function OrderPage() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <OrderHeader search={search} setSearch={setSearch} />
      <OrderTable search={search} />
    </div>
  );
}
