import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useDeleteCoupon = () => {
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  const deleteCoupon = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete(`${base_url}/delete_coupons/${id}/`);
      const data = res.data;
      toast.success("coupon deleted successfully");
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

  return { loading, deleteCoupon };
};

export default useDeleteCoupon;
