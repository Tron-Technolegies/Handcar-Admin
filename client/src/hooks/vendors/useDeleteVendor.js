import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const useDeleteVendor = () => {
  const [loading, setLoading] = useState("");

  const deleteVendor = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete("url");
      const data = res.data;
      toast.success("Vendor successfully deleted");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, deleteVendor };
};

export default useDeleteVendor;
