import React, { useEffect, useState } from "react";
import FormInput from "../../FormInput";
import { useParams } from "react-router-dom";
import useGetSingleCategory from "../../../hooks/category/useGetSingleCategory";
import Loading from "../../Loading";
import useEditCategory from "../../../hooks/category/useEditCategory";

export default function EditCategoryForm() {
  const { id } = useParams();
  const { loading, category } = useGetSingleCategory({ id });
  const { loading: editLoading, editCategory } = useEditCategory();

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
          onClick={() => editCategory({ id: id, new_name: name })}
          className="px-3 py-2 bg-black text-white rounded-lg"
        >
          Update
        </button>
        {editLoading && <Loading />}
      </div>
    </div>
  );
}
