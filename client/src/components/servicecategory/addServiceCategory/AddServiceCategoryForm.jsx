import React, { useState } from "react";
import FormInput from "../../FormInput";
import useAddServiceCategory from "../../../hooks/servicecategory/useAddServiceCategory";
import Loading from "../../Loading";

export default function AddServiceCategoryForm() {
  const [name, setName] = useState("");
  const { loading, addServiceCategory } = useAddServiceCategory();
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
          onClick={() => addServiceCategory({ name })}
          className="px-3 py-2 bg-black text-white rounded-lg"
        >
          Save
        </button>
      </div>
      {loading && <Loading />}
    </div>
  );
}
