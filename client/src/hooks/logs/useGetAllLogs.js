import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetAllLogs = () => {
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState([]);

  const getAllLogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setLogs(data.logs);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllLogs();
  }, []);

  const refetch = () => {
    getAllLogs();
  };

  return { loading, logs, refetch };
};

export default useGetAllLogs;
