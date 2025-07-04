import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { base_url } from '../../constants'
import { toast } from 'react-toastify'

const useAddSubscriber = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const addSubscriber = async ({
  email,
  address,
  vendor,
  service,
  plan,
  duration,
  start,
}) => {
  setLoading(true);
  try {
    const res = await axios.post(
      `${base_url}/add_subscriber`,
      {
        email,
        address,
        assigned_vendors: vendor, 
        service_type: service,
        plan,
        duration,
        start_date: start,
      },
      {
        withCredentials: true, 
      }
    );

    toast.success("Subscriber added successfully");
    navigate("/subscriptions");
  } catch (err) {
    toast.error(
      err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Something went wrong"
    );
  } finally {
    setLoading(false);
  }
};

return {loading, addSubscriber}

}

export default useAddSubscriber


