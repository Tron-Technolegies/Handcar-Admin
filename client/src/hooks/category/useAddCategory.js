import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useAddCategory = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addCategory = async ({ name }) => {
    setLoading(true);
    try {
      const res = await axios.post(`${base_url}/add_category`, {
        name,
      });
      const data = res.data;
      console.log(data);
      toast.success("Category added successfully");
      navigate("/category");
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
  return { loading, addCategory };
};

export default useAddCategory;
