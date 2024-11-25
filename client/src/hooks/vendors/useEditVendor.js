import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useEditVendor = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const editVendor = async ({ name, email, phone, password, id }) => {
    setLoading(true);
    try {
      const res = await axios.patch("url", { name, email, phone, password });
      const data = res.data;
      toast.success("Vendor updated successfully");
      navigate("/services");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, editVendor };
};

export default useEditVendor;
