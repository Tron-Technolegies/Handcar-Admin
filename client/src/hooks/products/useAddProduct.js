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
    category_name,
    brand_name,
    image,
    price,
    discount_percentage,
    description,
    stock,
  }) => {
    setLoading(true);
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("category_name", category_name);
    formdata.append("brand_name", brand_name);
    formdata.append("price", price);
    formdata.append("image", image);
    formdata.append("discount_percentage", discount_percentage);
    formdata.append("description", description);
    formdata.append("stock", stock);
    try {
      const res = await axios.post(`${base_url}/add_product`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
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
