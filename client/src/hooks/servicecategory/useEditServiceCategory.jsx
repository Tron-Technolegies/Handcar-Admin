import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../constants";
import { toast } from "react-toastify";

const useEditServiceCategory = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const editServiceCategory = async ({ name, id }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/edit_service_category/${id}`,
        { name },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("Successfully edited");
      navigate("/service_category");
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { loading, editServiceCategory };
};

export default useEditServiceCategory;
