import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../constants";

const useGetSingleServiceCategory = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(null);

  const getSingleServiceCategory = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/edit_service_category/${id}`, {
        withCredentials: true,
      });
      const data = res.data;
      setCategory(data);
    } catch (error) {
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
    getSingleServiceCategory();
  }, []);

  return { loading, category };
};

export default useGetSingleServiceCategory;
