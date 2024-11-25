import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const useDeleteBrand = () => {
  const [loading, setLoading] = useState(false);

  const deleteBrand = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete("url");
      const data = res.data;
      toast.success("Brand Successfully Deleted");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, deleteBrand };
};

export default useDeleteBrand;
