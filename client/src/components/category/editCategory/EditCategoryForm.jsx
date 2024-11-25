import React, { useState } from "react";
import FormInput from "../../FormInput";

export default function EditCategoryForm() {
  const [name, setName] = useState("");
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
        <button className="px-3 py-2 bg-black text-white rounded-lg">
          Update
        </button>
      </div>
    </div>
  );
}
