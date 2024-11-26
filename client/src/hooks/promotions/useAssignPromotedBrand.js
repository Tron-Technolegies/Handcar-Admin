import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const useAssignPromotedBrand = () => {
  const [loading, setLoading] = useState(false);

  const assignPromotedBrand = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.patch("url");
      const data = res.data;
      toast.success("Brand Promoted Successfully");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, assignPromotedBrand };
};

export default useAssignPromotedBrand;
