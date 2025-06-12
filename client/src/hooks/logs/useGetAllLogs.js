import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetAllLogs = ({ queryType, query }) => {
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState([]);

  const getAllLogs = async () => {
    setLoading(true);
    let params = {};
    if (queryType === "Vendor") {
      params = {
        service_name: query,
      };
    } else if (queryType === "Communication") {
      params = {
        mode_of_communication: query,
      };
    } else {
      params = {};
    }
    try {
      const res = await axios.get(
        `${base_url}/get_service_interaction_logs_admin`,
        { params: params, withCredentials: true }
      );
      const data = res.data;
      setLogs(data.logs);
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
    getAllLogs();
  }, []);

  const refetch = () => {
    getAllLogs();
  };

  return { loading, logs, refetch };
};

export default useGetAllLogs;
