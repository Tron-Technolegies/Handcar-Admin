import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetAllBrands = () => {
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([]);

  const getAllBrands = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setBrands(data.brands);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllBrands();
  }, []);

  return { loading, brands };
};

export default useGetAllBrands;
