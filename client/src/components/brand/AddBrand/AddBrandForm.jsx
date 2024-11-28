import React, { useState } from "react";
import FormInput from "../../FormInput";
import useAddBrand from "../../../hooks/brands/useAddBrand";
import Loading from "../../Loading";

export default function AddBrandForm() {
  const [name, setName] = useState("");
  const { loading, addBrand } = useAddBrand();
  return (
    <div>
      <FormInput
        title={"Brand Name"}
        type={"text"}
        value={name}
        onchange={(e) => setName(e.target.value)}
        placeholder={"Enter Brand Name"}
      />
      <div className="flex justify-end">
        <button
          className="px-3 py-2 bg-black text-white rounded-lg"
          onClick={() => addBrand({ name })}
        >
          Save
        </button>
        {loading && <Loading />}
      </div>
    </div>
  );
}
