import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const useFindVendorToAssign = () => {
  const [loading, setLoading] = useState(false);
  const [vendors, setVendors] = useState([]);

  const findVendors = async ({ zip }) => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setVendors(data.vendors);
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
  return { loading, vendors, findVendors };
};

export default useFindVendorToAssign;
