import React, { useEffect, useState } from "react";
import FormInput from "../../FormInput";
import { useParams } from "react-router-dom";
import useGetSingleBrand from "../../../hooks/brands/useGetSingleBrand";
import Loading from "../../Loading";

export default function EditBrandForm() {
  const { id } = useParams();
  const { loading, brand } = useGetSingleBrand({ id });

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
        <button className="px-3 py-2 bg-black text-white rounded-lg">
          Update
        </button>
      </div>
    </div>
  );
}
