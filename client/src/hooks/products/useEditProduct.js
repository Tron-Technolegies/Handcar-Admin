import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useEditProduct = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const editProduct = async ({
    id,
    name,
    category,
    brand,
    image,
    price,
    stock,
    description,
  }) => {
    setLoading(true);
    try {
      const res = await axios.patch("url", {
        name,
        category,
        brand,
        image,
        price,
        stock,
        description,
      });
      const data = res.data;
      toast.success("Product successfully updated");
      navigate("/products");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, editProduct };
};

export default useEditProduct;
