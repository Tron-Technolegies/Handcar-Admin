import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetSingleProduct = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});

  const getSingleProduct = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setProduct(data.product);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
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
