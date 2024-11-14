import React from "react";
import FormInput from "../../FormInput";
import FormSelect from "../../FormSelect";

export default function AddSubscriberForm() {
  return (
    <div>
      <FormInput
        title={"Username"}
        type={"text"}
        placeholder={"Enter username"}
      />
      <FormInput
        title={"User Postal Code"}
        type={"text"}
        placeholder={"ZIP/PIN Code"}
      />
      <FormSelect
        title={"Assign Vendor"}
        list={["vendor 1", "vendor 2", "vendor 3", "vendor 4"]}
      />
      <FormSelect title={"Service"} list={["Car Wash", "Maintenance"]} />
      <FormSelect title={"Plan"} list={["Basic", "Premium", "Luxuary"]} />
      <FormSelect title={"Duration"} list={["6 Months", "12 Months"]} />
      <FormInput title={"Start Date"} type={"date"} />
      <FormInput title={"End Date"} type={"date"} />
      <div className="flex justify-end ">
        <button className="px-4 py-2 bg-black text-white rounded-lg">
          Add Product
        </button>
      </div>
    </div>
  );
}
