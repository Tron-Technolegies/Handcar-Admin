import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../constants";

const useGetAllOrders = ({ search }) => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${base_url}/get_all_orders`, {
        withCredentials: true,
        params: {
          search,
        },
      });
      const data = response.data;
      setOrders(data.orders);
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
    getAllOrders();
  }, []);

  const refetch = () => {
    getAllOrders();
  };

  return { loading, refetch, orders };
};

export default useGetAllOrders;
