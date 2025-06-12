import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetAllVendors = ({ search }) => {
  const [loading, setLoading] = useState(false);
  const [vendors, setVendors] = useState([]);

  const getAllVendors = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/view_services_by_admin`, {
        params: {
          search,
        },
        withCredentials: true,
      });
      const data = res.data;
      setVendors(data.vendor);
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
    getAllVendors();
  }, []);

  const refetch = () => {
    getAllVendors();
  };
  return { loading, vendors, refetch };
};

export default useGetAllVendors;
