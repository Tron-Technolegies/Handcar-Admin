import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetPromotedBrand = () => {
  const [loading, setLoading] = useState(false);
  const [brand, setBrand] = useState([]);

  const getPromotedBrand = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setBrand(data.brand);
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

  return { loading, brand };
};

export default useGetPromotedBrand;
