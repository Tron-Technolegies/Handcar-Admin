import React, { useEffect, useState } from "react";
import { base_url } from "../../constants";
import axios from "axios";

const useGetAllStats = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(0);
  const [vendors, setVendors] = useState(0);
  const [users, setUsers] = useState(0);
  const [subscriptions, setSubscriptions] = useState(0);

  const getStats = async () => {
    setLoading(true);

    try {
      const res = await axios.get(`${base_url}/admin_dashboard`, {
        withCredentials: true,
      });
      const data = res.data;
      setProducts(data.total_accessories);
      setUsers(data.total_users);
      setVendors(data.total_services);
      setSubscriptions(data.total_subscribers);
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
    getStats();
  }, []);

  const refetch = () => {
    getStats();
  };

  return { loading, users, products, vendors, subscriptions, refetch };
};

export default useGetAllStats;
