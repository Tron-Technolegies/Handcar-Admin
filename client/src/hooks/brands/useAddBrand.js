import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useAddBrand = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addBrand = async ({ name }) => {
    setLoading(true);
    try {
      const res = await axios.post(`${base_url}/add_brand`, { name });
      const data = res.data;
      toast.success("Brand added Successfully");
      navigate("/brand");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addBrand };
};

export default useAddBrand;
