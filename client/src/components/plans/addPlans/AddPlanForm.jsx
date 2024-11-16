import React from "react";
import FormInput from "../../FormInput";

export default function AddPlanForm() {
  return (
    <div>
      <FormInput
        title={"Plan Name"}
        type={"text"}
        placeholder={"Enter Your Plan Name"}
      />
      <FormInput
        title={"Service Type"}
        type={"text"}
        placeholder={"Enter your type of service"}
      />
      <FormInput
        title={"Duration"}
        type={"number"}
        placeholder={"Enter the plan duration"}
      />
      <FormInput
        title={"Price"}
        type={"number"}
        placeholder={"Enter the price"}
      />
      <div className="flex flex-col mb-3">
        <label className="text-sm mb-3">Description</label>
        <textarea
          rows={7}
          placeholder="Enter your description"
          className="px-3 py-2 bg-[#F5F5F5] rounded-lg border border-gray-300 text-gray-900"
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button className="px-4 py-2 rounded-lg bg-black text-white">
          Save Plan
        </button>
      </div>
    </div>
  );
}
