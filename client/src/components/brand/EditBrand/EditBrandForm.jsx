import React, { useEffect, useState } from "react";
import FormInput from "../../FormInput";
import { useParams } from "react-router-dom";
import useGetSingleBrand from "../../../hooks/brands/useGetSingleBrand";
import Loading from "../../Loading";
import useEditBrand from "../../../hooks/brands/useEditBrand";

export default function EditBrandForm() {
  const { id } = useParams();
  const { loading, brand } = useGetSingleBrand({ id });
  const { loading: editLoading, editBrand } = useEditBrand();

  const [name, setName] = useState("");

  useEffect(() => {
    if (brand) {
      setName(brand.name);
    }
  }, [loading, brand]);

  return loading ? (
    <Loading />
  ) : (
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
          onClick={() => editBrand({ id, name })}
          className="px-3 py-2 bg-black text-white rounded-lg"
        >
          Update
        </button>
        {editLoading && <Loading />}
      </div>
    </div>
  );
}
