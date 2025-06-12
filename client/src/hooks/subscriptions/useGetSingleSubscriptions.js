import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetSingleSubscriptions = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [sub, setSub] = useState({});

  const getSingleSubs = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setSub(data.subscription);
    } catch (err) {
      console.log(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleSubs();
  }, []);

  return { loading, sub };
};

export default useGetSingleSubscriptions;
