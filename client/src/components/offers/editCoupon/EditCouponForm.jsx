import React, { useState } from "react";
import FormInput from "../../FormInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useEditCoupon from "../../../hooks/offers/useEditCoupon";
import { useParams } from "react-router-dom";
import Loading from "../../Loading";

export default function EditCouponForm() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();

  const { loading, editCoupon } = useEditCoupon();
  return (
    <div>
      <FormInput
        title={"Coupon Name"}
        type={"text"}
        placeholder={"Enter your coupon name"}
        value={name}
        onchange={(e) => setName(e.target.value)}
      />
      <FormInput
        title={"Coupon Code"}
        type={"text"}
        placeholder={"xxxxxxxxxxxx"}
        value={code}
        onchange={(e) => setCode(e.target.value)}
      />
      <FormInput
        title={"Discount Value"}
        type={"text"}
        placeholder={"10%"}
        value={discount}
        onchange={(e) => setDiscount(e.target.value)}
      />
      <FormInput
        title={"Start Date"}
        type={"date"}
        value={start}
        onchange={(e) => setStart(e.target.value)}
      />
      <FormInput
        title={"End Date"}
        type={"date"}
        value={end}
        onchange={(e) => setEnd(e.target.value)}
      />
      <div className="flex flex-col mb-3">
        <label className="text-sm mb-3">Description</label>
        <ReactQuill
          theme="snow"
          placeholder="Enter your description"
          value={description}
          onChange={(value) => setDescription(value)}
          className="px-3 py-2 bg-[#F5F5F5] rounded-lg border border-gray-300 text-gray-900"
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={() =>
            editCoupon({ id, name, code, description, discount, start, end })
          }
          className="px-4 py-2 rounded-lg  bg-black text-white"
        >
          Update Coupon
        </button>
        {loading && <Loading />}
      </div>
    </div>
  );
}
