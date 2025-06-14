import React, { useState } from "react";
import SubscriptionsHeader from "../../components/subscriptions/SubscriptionsHeader";
import SubscriptionTable from "../../components/subscriptions/SubscriptionTable";

export default function SubscriptionPage() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <SubscriptionsHeader search={search} setSearch={setSearch} />
      <SubscriptionTable search={search} />
    </div>
  );
}
