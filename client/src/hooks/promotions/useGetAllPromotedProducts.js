import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetAllPromotedProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getAllPromotedProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/view_promoted_products`);
      const data = res.data;
      setProducts(data.promoted_products);
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

  const refetch = () => {
    getAllPromotedProducts();
  };

  return { loading, products, refetch };
};

export default useGetAllPromotedProducts;
