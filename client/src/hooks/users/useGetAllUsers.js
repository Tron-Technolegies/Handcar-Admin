import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetAllUsers = ({ search }) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/view_users_by_admin`, {
        params: {
          search,
        },
        withCredentials: true,
      });
      const data = res.data;
      setUsers(data.user);
    } catch (err) {
      console.log(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const refetch = () => {
    getAllUsers();
  };

  return { loading, users, refetch };
};

export default useGetAllUsers;
