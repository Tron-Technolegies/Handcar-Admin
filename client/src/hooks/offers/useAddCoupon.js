import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
      const res = await axios.post("url", {
        name,
        code,
        discount,
        start,
        end,
        description,
      });
      const data = res.data;
      toast.success("Coupon added successfully");
      navigate("/offers");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addCoupon };
};

export default useAddCoupon;
