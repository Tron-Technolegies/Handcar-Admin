import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useAddProduct = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addProduct = async ({
    name,
    category_id,
    brand_id,
    image,
    price,
    discount_percentage,
    description,
  }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/add_product`,
        {
          name,
          category_id,
          brand_id,
          image,
          price,
          discount_percentage,
          description,
        },
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
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
