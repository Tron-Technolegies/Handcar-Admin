import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../constants";

const useGetAllServiceCategories = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const getAllServiceCategories = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/view_service_category`, {
        withCredentials: true,
      });
      const data = res.data;
      setCategories(data.categories);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllServiceCategories();
  }, []);

  const refetch = () => {
    getAllServiceCategories();
  };

  return { loading, categories, refetch };
};

export default useGetAllServiceCategories;
