import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/Logout`,
        {},
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("Successfully logged out");
      navigate("/login");
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
  return { loading, logout };
};

export default useLogout;
