import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetAllSubscriptions = () => {
  const [loading, setLoading] = useState(false);
  const [subs, setSubs] = useState([]);

  const getAllSubs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/view_subscribers`);
      const data = res.data;
      setSubs(data.user);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllSubs();
  }, []);

  const refetch = () => {
    getAllSubs();
  };

  return { loading, subs, refetch };
};

export default useGetAllSubscriptions;
