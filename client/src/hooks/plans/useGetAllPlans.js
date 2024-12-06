import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetAllPlans = ({ search }) => {
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState([]);

  const getAllPlans = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/view_plans`, {
        params: {
          search,
        },
      });
      const data = res.data;
      setPlans(data.plan);
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

  const refetch = () => {
    getAllPlans();
  };

  return { loading, plans, refetch };
};

export default useGetAllPlans;
