import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useAddCoupon = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addCoupon = async ({
    name,
    code,
    discount,
    start,
    end,
    description,
  }) => {
    setLoading(true);
    try {
      const res = await axios.post(`${base_url}/add_coupon`, {
        name,
        coupon_code: code,
        discount_percentage: discount,
        start_date: start,
        end_date: end,
        description,
      });
      const data = res.data;
      toast.success("Coupon added successfully");
      navigate("/offers");
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addCoupon };
};

export default useAddCoupon;
