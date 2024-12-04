import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useAddVendor = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addVendor = async ({ name, email, phone, password }) => {
    setLoading(true);
    try {
      const res = await axios.post(`${base_url}/add_vendor`, {
        vendor_name: name,
        email,
        phone_number: phone,
        password,
      });
      const data = res.data;
      toast.success("Vendor successfully added");
      navigate("/services");
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.error ||
          err?.data?.error ||
          err?.response?.data?.error ||
          "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addVendor };
};

export default useAddVendor;
