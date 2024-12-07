import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetPromotedBrand = () => {
  const [loading, setLoading] = useState(false);
  const [brand, setBrand] = useState([]);

  const getPromotedBrand = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/view_promoted_brands`);
      const data = res.data;
      setBrand(data.promoted_products);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPromotedBrand();
  }, []);

  const refetch = () => {
    getPromotedBrand();
  };

  return { loading, brand, refetch };
};

export default useGetPromotedBrand;
