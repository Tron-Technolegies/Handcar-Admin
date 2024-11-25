import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetSingleCoupon = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [coupon, setCoupon] = useState({});

  const getSingleCoupon = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setCoupon(data.coupon);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleCoupon();
  }, []);

  return { loading, coupon };
};

export default useGetSingleCoupon;
