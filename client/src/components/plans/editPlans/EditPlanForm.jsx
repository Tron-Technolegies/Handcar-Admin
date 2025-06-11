import React, { useEffect, useState } from "react";
import FormInput from "../../FormInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useEditPlan from "../../../hooks/plans/useEditPlan";
import Loading from "../../Loading";
import FormSelect from "../../FormSelect";
import { useParams } from "react-router-dom";
import useGetSinglePlan from "../../../hooks/plans/useGetSinglePlan";

export default function EditPlanForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("Car Wash");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const { plan } = useGetSinglePlan({ id });

  const { loading, editPlan } = useEditPlan();

  useEffect(() => {
    if (plan) {
      setName(plan.name);
      setType(plan.service_type);
      setDuration(plan.duration);
      setPrice(plan.price);
      setDescription(plan.description);
    }
  }, [plan]);
  return (
    <div>
      <FormInput
        title={"Plan Name"}
        type={"text"}
        value={name}
        onchange={(e) => setName(e.target.value)}
        placeholder={"Enter Your Plan Name"}
      />
      <FormSelect
        title={"Service Type"}
        value={type}
        onchange={(e) => setType(e.target.value)}
        list={["Car Wash", "Maintenance"]}
      />
      <FormInput
        title={"Duration"}
        value={duration}
        onchange={(e) => setDuration(e.target.value)}
        type={"number"}
        placeholder={"Enter the plan duration"}
      />
      <FormInput
        title={"Price"}
        type={"number"}
        value={price}
        onchange={(e) => setPrice(e.target.value)}
        placeholder={"Enter the price"}
      />
      <div className="flex flex-col mb-3">
        <label className="text-sm mb-3">Description</label>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={(value) => setDescription(value)}
          placeholder="Enter your description"
          className="px-3 py-2 bg-[#F5F5F5] rounded-lg border border-gray-300 text-gray-900"
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={() =>
            editPlan({ id, name, type, duration, description, price })
          }
          className="px-4 py-2 rounded-lg bg-black text-white"
        >
          Save Plan
        </button>
        {loading && <Loading />}
      </div>
    </div>
  );
}
