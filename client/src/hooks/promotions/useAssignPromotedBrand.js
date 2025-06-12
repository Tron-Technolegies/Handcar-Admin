import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useAssignPromotedBrand = () => {
  const [loading, setLoading] = useState(false);

  const assignPromotedBrand = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.post(`${base_url}/promote_brand`, {
        brand_id: id,
      });
      const data = res.data;
      toast.success("Brand Promoted Successfully");
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
  return { loading, assignPromotedBrand };
};

export default useAssignPromotedBrand;
