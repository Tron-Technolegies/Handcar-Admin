import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetAllPromotedProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getAllPromotedProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setProducts(products);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllPromotedProducts();
  }, []);

  return { loading, products };
};

export default useGetAllPromotedProducts;
