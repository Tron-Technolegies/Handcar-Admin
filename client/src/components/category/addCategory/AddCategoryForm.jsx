import React, { useState } from "react";
import FormInput from "../../FormInput";
import useAddCategory from "../../../hooks/category/useAddCategory";

export default function AddCategoryForm() {
  const [name, setName] = useState("");

  const { loading, addCategory } = useAddCategory();
  return (
    <div>
      <FormInput
        title={"Category Name"}
        type={"text"}
        value={name}
        onchange={(e) => setName(e.target.value)}
        placeholder={"Enter Category Name"}
      />
      <div className="flex justify-end">
        <button
          onClick={() => addCategory({ name })}
          className="px-3 py-2 bg-black text-white rounded-lg"
        >
          Save
        </button>
      </div>
    </div>
  );
}
