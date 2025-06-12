import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useEditBrand = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const editBrand = async ({ id, name }) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    try {
      const res = await axios.post(`${base_url}/edit_brand/${id}/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const data = res.data;
      toast.success("Brand updated successfully");
      navigate("/brand");
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
  return { loading, editBrand };
};

export default useEditBrand;
