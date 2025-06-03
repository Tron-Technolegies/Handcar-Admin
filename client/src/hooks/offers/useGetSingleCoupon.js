import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetSingleCoupon = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [coupon, setCoupon] = useState({});

  const getSingleCoupon = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/edit_coupons/${id}`, {
        withCredentials: true,
      });
      const data = res.data;
      setCoupon(data);
    } catch (error) {
      console.log(
        error?.response?.data?.message ||
          error?.response?.data?.error ||
          error?.error ||
          "something went wrong"
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
