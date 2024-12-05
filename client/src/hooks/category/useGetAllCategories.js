import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetAllCategories = ({ search }) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const getAllProducts = async () => {
    setLoading(true);

    try {
      const res = await axios.get(`${base_url}/view_category`, {
        params: {
          search,
        },
      });
      const data = res.data;
      setCategories(data.categories);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  const refetch = () => {
    getAllProducts();
  };
  return { loading, categories, refetch };
};

export default useGetAllCategories;
