import React from "react";
import GoBack from "../../GoBack";

export default function AddSubscriberHeader() {
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">Add New Subscriber</h4>
      <div className="flex justify-end">
        <GoBack route={"/subscriptions"} />
      </div>
    </div>
  );
}
