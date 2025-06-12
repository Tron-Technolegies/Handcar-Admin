import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useDeleteVendor = () => {
  const [loading, setLoading] = useState("");

  const deleteVendor = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete(`${base_url}/delete_service/${id}/`, {
        withCredentials: true,
      });
      const data = res.data;
      toast.success("Vendor successfully deleted");
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
  return { loading, deleteVendor };
};

export default useDeleteVendor;
