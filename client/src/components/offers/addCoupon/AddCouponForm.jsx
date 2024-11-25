import React, { useState } from "react";
import FormInput from "../../FormInput";

export default function AddCouponForm() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <FormInput
        title={"Coupon Name"}
        type={"text"}
        value={name}
        onchange={(e) => setName(e.target.value)}
        placeholder={"Enter your coupon name"}
      />
      <FormInput
        title={"Coupon Code"}
        type={"text"}
        placeholder={"xxxxxxxxxxxx"}
        value={code}
        onchange={(e) => setCode(e.target.value)}
      />
      <FormInput
        title={"Discount Value"}
        type={"text"}
        placeholder={"10%"}
        value={discount}
        onchange={(e) => setDiscount(e.target.value)}
      />
      <FormInput
        title={"Start Date"}
        type={"date"}
        value={start}
        onchange={(e) => setStart(e.target.value)}
      />
      <FormInput
        title={"End Date"}
        type={"date"}
        value={end}
        onchange={(e) => setEnd(e.target.value)}
      />
      <div className="flex flex-col mb-3">
        <label className="text-sm mb-3">Description</label>
        <textarea
          rows={7}
          placeholder="Enter your description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="px-3 py-2 bg-[#F5F5F5] rounded-lg border border-gray-300 text-gray-900"
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button className="px-4 py-2 rounded-lg  bg-black text-white">
          Save Coupon
        </button>
      </div>
    </div>
  );
}
