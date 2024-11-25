import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useAddProduct = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addProduct = async ({
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
      const res = await axios.post("url", {
        name,
        category,
        brand,
        image,
        price,
        stock,
        description,
      });
      const data = res.data;
      toast.success("Product added successfully");
      navigate("/products");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addProduct };
};

export default useAddProduct;
