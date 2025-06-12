import axios from "axios";
import React, { useState } from "react";
import { base_url } from "../../constants";
import { toast } from "react-toastify";

export default function useUpdateOrderStatus() {
  const [loading, setLoading] = useState(false);
  const updateStatus = async ({ order_id, status }) => {
    setLoading(true);
    try {
      const response = await axios.patch(
        `${base_url}/update_order_status/${order_id}/`,
        { status },
        { withCredentials: true }
      );
      const data = response.data;
      toast.success("Successfully changed status");
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
  return { loading, updateStatus };
}
