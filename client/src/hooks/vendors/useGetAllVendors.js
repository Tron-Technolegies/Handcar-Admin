import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetAllVendors = () => {
  const [loading, setLoading] = useState(false);
  const [vendors, setVendors] = useState([]);

  const getAllVendors = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setVendors(data.vendors);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllVendors();
  }, []);

  return { loading, vendors };
};

export default useGetAllVendors;
