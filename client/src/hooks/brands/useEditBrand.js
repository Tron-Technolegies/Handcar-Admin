import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useEditBrand = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const editBrand = async ({ id, name }) => {
    setLoading(true);
    try {
      const res = await axios.patch("url", { name });
      const data = res.data;
      toast.success("Brand updated successfully");
      navigate("/brand");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, editBrand };
};

export default useEditBrand;
