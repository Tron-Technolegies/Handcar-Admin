import React, { useState } from "react";

export default function useAddProductImage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const addImage = async (e) => {
    setLoading(true);
    const formdata = new FormData();
    formdata.append("image", e.target.files[0]);
    setData(formdata);
    setLoading(false);
  };
  return { loading, addImage, data };
}
