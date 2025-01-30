import React, { useEffect, useState } from "react";
import useGetSingleServiceCategory from "../../../hooks/servicecategory/useGetSingleServiceCategory";
import Loading from "../../Loading";
import FormInput from "../../FormInput";
import { useParams } from "react-router-dom";
import useEditServiceCategory from "../../../hooks/servicecategory/useEditServiceCategory";

export default function EditServiceCategoryForm() {
  const { id } = useParams();
  const { loading, category } = useGetSingleServiceCategory({ id });
  const { loading: editLoading, editServiceCategory } =
    useEditServiceCategory();
  const [name, setName] = useState("");

  useEffect(() => {
    if (category) {
      setName(category.name);
    }
  }, [loading, category]);
  return loading ? (
    <Loading />
  ) : (
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
          onClick={() => editServiceCategory({ id: id, name: name })}
          className="px-3 py-2 bg-black text-white rounded-lg"
        >
          Update
        </button>
      </div>
      {editLoading && <Loading />}
    </div>
  );
}
