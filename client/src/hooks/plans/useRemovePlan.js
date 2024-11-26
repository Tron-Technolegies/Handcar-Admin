import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const useRemovePlan = () => {
  const [loading, setLoading] = useState(false);
  const removePlan = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete("url");
      const data = res.data;
      toast.success("Plan deleted successfully");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, removePlan };
};

export default useRemovePlan;
