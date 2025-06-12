import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useAddSubscriber = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addSubscriber = async ({
    email,
    zip,
    vendor,
    service,
    plan,
    duration,
    start,
  }) => {
    setLoading(true);
    try {
      const res = await axios.post(`${base_url}/add_subscriber`, {
        email,
        postal_code: zip,
        assigned_vendor: vendor,
        service_type: service,
        plan,
        duration,
        start_date: start,
      });
      const data = res.data;
      toast.success("Subscriber added successfully");
      navigate("/subscriptions");
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addSubscriber };
};

export default useAddSubscriber;
