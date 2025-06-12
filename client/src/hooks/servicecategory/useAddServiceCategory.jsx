import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../constants";
import { toast } from "react-toastify";

const useAddServiceCategory = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addServiceCategory = async ({ name }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/add_service_category`,
        {
          name,
        },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("successfully added category");
      navigate("/service_category");
    } catch (error) {
      console.log(error);
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

  return { loading, addServiceCategory };
};

export default useAddServiceCategory;
