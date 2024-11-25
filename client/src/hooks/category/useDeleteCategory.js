import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const useDeleteCategory = () => {
  const [loading, setLoading] = useState(false);

  const deleteCategory = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete("url");
      const data = res.data;
      toast.success("Category successfully Deleted");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, deleteCategory };
};

export default useDeleteCategory;
