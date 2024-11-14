import React from "react";
import SubscriptionsHeader from "../../components/subscriptions/SubscriptionsHeader";
import SubscriptionTable from "../../components/subscriptions/SubscriptionTable";

export default function SubscriptionPage() {
  return (
    <div>
      <SubscriptionsHeader />
      <SubscriptionTable />
    </div>
  );
}
