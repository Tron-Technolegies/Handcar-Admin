import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useEditCoupon = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const editCoupon = async ({
    name,
    code,
    discount,
    start,
    end,
    description,
    id,
  }) => {
    setLoading(true);
    try {
      const res = await axios.put(`${base_url}/edit_coupons/${id}/`, {
        name,
        coupon_code: code,
        discount_percentage: discount,
        start_date: start,
        end_date: end,
        description,
      });
      const data = res.data;
      toast.success("Coupon updated successfully");
      navigate("/offers");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, editCoupon };
};

export default useEditCoupon;
