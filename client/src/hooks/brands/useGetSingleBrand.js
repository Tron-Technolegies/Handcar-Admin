import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetSingleBrand = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [brand, setBrand] = useState(null);

  const getSingleBrand = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/edit_brand/${id}/`);
      const data = res.data;
      setBrand(data);
    } catch (err) {
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
    getSingleBrand();
  }, []);
  return { loading, brand };
};

export default useGetSingleBrand;
