import React from "react";
import FormInput from "../../FormInput";

export default function AddCouponForm() {
  return (
    <div>
      <FormInput
        title={"Coupon Name"}
        type={"text"}
        placeholder={"Enter your coupon name"}
      />
      <FormInput
        title={"Coupon Code"}
        type={"text"}
        placeholder={"xxxxxxxxxxxx"}
      />
      <FormInput title={"Discount Value"} type={"text"} placeholder={"10%"} />
      <FormInput title={"Start Date"} type={"date"} />
      <FormInput title={"Start Date"} type={"date"} />
      <div className="flex flex-col mb-3">
        <label className="text-sm mb-3">Description</label>
        <textarea
          rows={7}
          placeholder="Enter your description"
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
