import React, { useState } from "react";
import FormInput from "../../FormInput";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useAddVendor from "../../../hooks/vendors/useAddVendor";
import Loading from "../../Loading";

export default function AddVendorForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { loading, addVendor } = useAddVendor();
  return (
    <div>
      <FormInput
        title={"Vendor Name"}
        type={"text"}
        value={name}
        onchange={(e) => setName(e.target.value)}
        placeholder={"Enter Name"}
      />
      <FormInput
        title={"Email"}
        type={"email"}
        placeholder={"Enter email"}
        value={email}
        onchange={(e) => setEmail(e.target.value)}
      />
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-sm font-medium text-[#344054]">Phone</label>
        <PhoneInput
          country={"ae"} // Set default country code (UAE in this case)
          value={phone}
          onChange={setPhone}
          inputStyle={{
            padding: "20px",
            paddingLeft: "40px",
            width: "100%",
            borderColor: "#D0D5DD",
            backgroundColor: "#F5F5F5",
          }}
        />
      </div>
      <FormInput
        title={"Password"}
        type={"password"}
        placeholder={"******"}
        value={password}
        onchange={(e) => setPassword(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          onClick={() => addVendor({ name, email, phone, password })}
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Create Vendor
        </button>
        {loading && <Loading />}
      </div>
    </div>
  );
}
