import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useRemovePlan = () => {
  const [loading, setLoading] = useState(false);
  const removePlan = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete(`${base_url}/delete_plan/${id}/`);
      const data = res.data;
      toast.success("Plan deleted successfully");
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
  return { loading, removePlan };
};

export default useRemovePlan;
