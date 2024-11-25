import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetSingleCategory = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState({});

  const getSingleCategory = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setCategory(data.category);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleCategory();
  }, []);
  return { loading, category };
};

export default useGetSingleCategory;
