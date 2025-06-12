import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useDeleteProduct = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const deleteProduct = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete("url");
      const data = res.data;
      toast.success("Product deleted successfully");
      navigate("/products");
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
  return { loading, deleteProduct };
};

export default useDeleteProduct;
