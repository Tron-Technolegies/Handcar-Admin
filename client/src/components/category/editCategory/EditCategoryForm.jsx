import React from "react";
import FormInput from "../../FormInput";

export default function EditCategoryForm() {
  return (
    <div>
      <FormInput
        title={"Category Name"}
        type={"text"}
        placeholder={"Enter Category Name"}
      />
      <div className="flex justify-end">
        <button className="px-3 py-2 bg-black text-white rounded-lg">
          Update
        </button>
      </div>
    </div>
  );
}
