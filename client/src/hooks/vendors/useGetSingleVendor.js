import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetSingleVendor = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [vendor, setVendor] = useState({});

  const getSingleVendor = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setVendor(data.vendor);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleVendor();
  }, []);

  return { loading, vendor };
};

export default useGetSingleVendor;
