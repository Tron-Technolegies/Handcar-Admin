import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useAddVendor = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addVendor = async ({ name, email, phone, password }) => {
    setLoading(true);
    try {
      const res = await axios.post("url", { name, email, phone, password });
      const data = res.data;
      toast.success("Vendor successfully added");
      navigate("/services");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addVendor };
};

export default useAddVendor;
