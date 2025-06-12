import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useRemovePromotedProduct = () => {
  const [loading, setLoading] = useState(false);

  const removePromotedProduct = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.post(`${base_url}/remove_promoted_product`, {
        product_id: id,
      });
      const data = res.data;
      toast.success("Product removed successfully");
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
  return { loading, removePromotedProduct };
};

export default useRemovePromotedProduct;
