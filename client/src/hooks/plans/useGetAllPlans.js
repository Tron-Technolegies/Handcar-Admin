import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const useGetAllPlans = () => {
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState([]);

  const getAllPlans = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setPlans(data.plans);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllPlans();
  }, []);

  return { loading, plans };
};

export default useGetAllPlans;
