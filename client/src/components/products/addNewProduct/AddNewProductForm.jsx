import React from "react";
import FormInput from "../../FormInput";
import FormSelect from "../../FormSelect";
import { FiUpload } from "react-icons/fi";

export default function AddNewProductForm() {
  return (
    <div className="my-10">
      <FormInput
        title={"Name"}
        type={"text"}
        placeholder={"Enter Product Name"}
      />
      <FormSelect
        title={"Category"}
        list={["Category-1", "Category-2", "Category-3", "Category-4"]}
      />
      <FormSelect
        title={"Brand"}
        list={["Brand-1", "Brand-2", "Brand-3", "Brand-4"]}
      />
      <div className="flex flex-col mb-3">
        <label className="text-sm mb-3">Product Image</label>
        <label className="w-16 h-16 border rounded-lg border-[#959595] text-[#959595] text-3xl flex justify-center items-center cursor-pointer">
          <FiUpload />
          <input type="file" hidden />
        </label>
      </div>

      <FormInput title={"Price"} type={"number"} placeholder={"10"} />
      <FormInput title={"Stock"} type={"number"} placeholder={"10"} />
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
          Save Product
        </button>
      </div>
    </div>
  );
}
