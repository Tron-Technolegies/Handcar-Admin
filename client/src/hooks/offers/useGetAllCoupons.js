import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetAllCoupons = () => {
  const [loading, setLoading] = useState(false);
  const [coupons, setCoupons] = useState([]);

  const getAllCoupons = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setCoupons(data.coupons);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllCoupons();
  }, []);

  return { loading, coupons };
};

export default useGetAllCoupons;
