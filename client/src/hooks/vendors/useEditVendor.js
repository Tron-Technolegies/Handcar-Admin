import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useEditVendor = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const editVendor = async ({ name, email, phone, password, id }) => {
    setLoading(true);
    try {
      const res = await axios.put(`${base_url}/edit_vendor/${id}/`, {
        vendor_name: name,
        email,
        phone_number: phone,
        password,
      });
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
