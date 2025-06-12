import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useDeleteBrand = () => {
  const [loading, setLoading] = useState(false);

  const deleteBrand = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete(`${base_url}/delete_brand/${id}/`);
      const data = res.data;
      toast.success("Brand Successfully Deleted");
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
  return { loading, deleteBrand };
};

export default useDeleteBrand;
