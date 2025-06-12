import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetSinglePlan = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState({});

  const getSinglePlan = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/edit_plan/${id}/`, {
        withCredentials: true,
      });
      const data = res.data;
      setPlan(data);
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
    getSinglePlan();
  }, []);

  return { loading, plan };
};

export default useGetSinglePlan;
