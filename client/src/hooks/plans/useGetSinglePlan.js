import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetSinglePlan = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState({});

  const getSinglePlan = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setPlan(data.plan);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSinglePlan();
  }, []);

  return { loading, plan };
};

export default useGetSinglePlan;
