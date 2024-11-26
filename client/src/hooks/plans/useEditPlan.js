import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useEditPlan = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const editPlan = async ({ name, type, duration, price, description, id }) => {
    setLoading(true);
    try {
      const res = await axios.patch("url", {
        name,
        type,
        duration,
        price,
        description,
      });
      const data = res.data;
      toast.success("Plan updated successfully");
      navigate("/plans");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    }
  };
  return { loading, editPlan };
};

export default useEditPlan;
