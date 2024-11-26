import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const useRemovePromotedBrand = () => {
  const [loading, setLoading] = useState(false);
  const removePromotedBrand = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.patch("url");
      const data = res.data;
      toast.success("Brand removed successfully");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, removePromotedBrand };
};

export default useRemovePromotedBrand;
