import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async ({ username, password }) => {
    setLoading(true);
    const formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", password);
    try {
      const res = await axios.post(`${base_url}/admin_login`, formdata, {
        headers: { "Content-Type": "multipart/formdata" },
        withCredentials: true,
      });
      const data = res.data;
      toast.success("successfully logged in");
      navigate("/");
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
  return { loading, login };
};

export default useLogin;
