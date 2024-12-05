import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetAllBrands = ({ search }) => {
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([]);

  const getAllBrands = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/view_brand`, {
        params: {
          search,
        },
      });
      const data = res.data;
      setBrands(data.brands);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllBrands();
  }, []);

  const refetch = () => {
    getAllBrands();
  };

  return { loading, brands, refetch };
};

export default useGetAllBrands;
