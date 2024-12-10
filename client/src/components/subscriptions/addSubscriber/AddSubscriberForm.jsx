import React, { useState } from "react";
import FormInput from "../../FormInput";
import FormSelect from "../../FormSelect";
import useAddSubscriber from "../../../hooks/subscriptions/useAddSubscriber";
import Loading from "../../Loading";
import useGetAllVendors from "../../../hooks/vendors/useGetAllVendors";

export default function AddSubscriberForm() {
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [vendor, setVendor] = useState("");
  const [service, setService] = useState("Car Wash");
  const [plan, setPlan] = useState("Basic");
  const [duration, setDuration] = useState(6);
  const [start, setStart] = useState("");

  const { loading, addSubscriber } = useAddSubscriber();
  const { loading: vendorLoading, vendors } = useGetAllVendors({ search: "" });
  return (
    <div>
      <FormInput
        title={"Email"}
        type={"email"}
        value={email}
        onchange={(e) => setEmail(e.target.value)}
        placeholder={"Enter Email"}
      />
      <FormInput
        title={"User Postal Code"}
        type={"text"}
        value={zip}
        onchange={(e) => setZip(e.target.value)}
        placeholder={"ZIP/PIN Code"}
      />
      {vendorLoading ? (
        <Loading />
      ) : (
        <FormSelect
          title={"Assign Vendor"}
          value={vendor}
          onchange={(e) => setVendor(e.target.value)}
          list={vendors.map((x) => x.name)}
        />
      )}
      <FormSelect
        title={"Service"}
        value={service}
        onchange={(e) => setService(e.target.value)}
        list={["Car Wash", "Maintenance"]}
      />
      <FormSelect
        title={"Plan"}
        value={plan}
        onchange={(e) => setPlan(e.target.value)}
        list={["Basic", "Premium", "Luxuary"]}
      />
      <FormSelect
        title={"Duration (months)"}
        value={duration}
        onchange={(e) => setDuration(e.target.value)}
        list={[6, 12]}
      />
      <FormInput
        title={"Start Date"}
        value={start}
        onchange={(e) => setStart(e.target.value)}
        type={"date"}
      />

      <div className="flex justify-end ">
        <button
          onClick={() =>
            addSubscriber({
              email,
              plan,
              duration,
              service,
              start,
              zip,
              vendor,
            })
          }
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Add Subscriber
        </button>
        {loading && <Loading />}
      </div>
    </div>
  );
}
