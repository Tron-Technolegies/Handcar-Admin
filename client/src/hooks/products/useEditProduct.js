import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useEditProduct = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const editProduct = async ({
    id,
    name,
    category_name,
    brand_name,
    image,
    price,
    stock,
    discount,
    description,
  }) => {
    const product_id = id;
    setLoading(true);
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("category_name", category_name);
    formdata.append("brand_name", brand_name);
    formdata.append("price", price);
    formdata.append("image", image);
    formdata.append("stock", stock);
    formdata.append("discount_percentage", discount);
    formdata.append("description", description);
    try {
      const res = await axios.post(
        `${base_url}/edit_product/${product_id}/`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/formdata",
          },
          withCredentials: true,
        }
      );
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
