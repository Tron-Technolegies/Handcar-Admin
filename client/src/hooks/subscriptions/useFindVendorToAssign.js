import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useFindVendorToAssign = () => {
  const [loading, setLoading] = useState(false);
  const [vendors, setVendors] = useState([]);

  const findVendors = async ({ address }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/get_nearby_vendor_on_add_subscription`,
        { address },
        { withCredentials: true }
      );
      const data = res.data;
      setVendors(data.nearby_vendors);
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
