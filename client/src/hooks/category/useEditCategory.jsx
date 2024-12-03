import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useEditCategory = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const editCategory = async ({ id, new_name }) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("name", new_name);
    try {
      const res = await axios.post(
        `${base_url}/edit_category/${id}/`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      const data = res.data;
      toast.success("category updated successfully");
      navigate("/category");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, editCategory };
};

export default useEditCategory;
