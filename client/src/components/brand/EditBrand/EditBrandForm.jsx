import React from "react";
import FormInput from "../../FormInput";

export default function EditBrandForm() {
  return (
    <div>
      <FormInput
        title={"Brand Name"}
        type={"text"}
        placeholder={"Enter Brand Name"}
      />
      <div className="flex justify-end">
        <button className="px-3 py-2 bg-black text-white rounded-lg">
          Update
        </button>
      </div>
    </div>
  );
}
