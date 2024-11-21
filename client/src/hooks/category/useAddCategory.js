import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useAddCategory = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addCategory = async ({ name }) => {
    setLoading(true);
    try {
      const res = await axios.post(`http://192.168.1.72:8000/add_category`, {
        name,
      });
      const data = res.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, addCategory };
};

export default useAddCategory;
