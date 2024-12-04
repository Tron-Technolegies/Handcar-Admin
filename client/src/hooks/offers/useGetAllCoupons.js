import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetAllCoupons = () => {
  const [loading, setLoading] = useState(false);
  const [coupons, setCoupons] = useState([]);

  const getAllCoupons = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/view_coupons`);
      const data = res.data;
      setCoupons(data.coupon);
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

  const refetch = () => {
    getAllCoupons();
  };

  return { loading, coupons, refetch };
};

export default useGetAllCoupons;
