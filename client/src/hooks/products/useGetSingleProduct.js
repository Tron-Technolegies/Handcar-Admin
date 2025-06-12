import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetSingleProduct = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const product_id = id;

  const getSingleProduct = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/edit_product/${product_id}/`, {
        withCredentials: true,
      });
      const data = res.data;
      setProduct(data);
    } catch (err) {
      console.log(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);

  return { loading, product };
};

export default useGetSingleProduct;
