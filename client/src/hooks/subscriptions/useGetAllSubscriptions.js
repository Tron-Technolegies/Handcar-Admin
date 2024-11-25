import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetAllSubscriptions = () => {
  const [loading, setLoading] = useState(false);
  const [subs, setSubs] = useState([]);

  const getAllSubs = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setSubs(data.subscriptions);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllSubs();
  }, []);

  return { loading, subs };
};

export default useGetAllSubscriptions;
