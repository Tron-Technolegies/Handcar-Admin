import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useAddSubscriber = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addSubscriber = async ({
    name,
    zip,
    vendor,
    service,
    plan,
    duration,
    start,
    end,
  }) => {
    setLoading(true);
    try {
      const res = await axios.post("url", {
        name,
        zip,
        vendor,
        service,
        plan,
        duration,
        start,
        end,
      });
      const data = res.data;
      toast.success("Subscriber added successfully");
      navigate("/subsriptions");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addSubscriber };
};

export default useAddSubscriber;
