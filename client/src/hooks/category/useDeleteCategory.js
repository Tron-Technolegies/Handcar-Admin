import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useDeleteCategory = () => {
  const [loading, setLoading] = useState(false);

  const deleteCategory = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete(`${base_url}/delete_category/${id}/`);
      const data = res.data;
      toast.success("Category successfully Deleted");
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, deleteCategory };
};

export default useDeleteCategory;
