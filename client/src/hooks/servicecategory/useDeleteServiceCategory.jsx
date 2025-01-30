import axios from "axios";
import React, { useState } from "react";
import { base_url } from "../../constants";
import { toast } from "react-toastify";

export default function useDeleteServiceCategory() {
  const [loading, setLoading] = useState(false);

  const deleteServiceCategory = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete(
        `${base_url}/delete_service_category/${id}`,
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("successfully deleted category");
    } catch (error) {
      console.log(error);
      toast.warn("something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { loading, deleteServiceCategory };
}
