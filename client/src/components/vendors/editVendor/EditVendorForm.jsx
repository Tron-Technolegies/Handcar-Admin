import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import FormInput from "../../FormInput";

export default function EditVendorForm() {
  return (
    <div>
      <FormInput
        title={"Vendor Name"}
        type={"text"}
        placeholder={"Enter Name"}
      />
      <FormInput title={"Email"} type={"email"} placeholder={"Enter email"} />
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-sm font-medium text-[#344054]">Phone</label>
        <PhoneInput
          country={"ae"} // Set default country code (UAE in this case)
          inputStyle={{
            padding: "20px",
            paddingLeft: "40px",
            width: "100%",
            borderColor: "#D0D5DD",
            backgroundColor: "#F5F5F5",
          }}
        />
      </div>
      <FormInput title={"Password"} type={"password"} placeholder={"******"} />
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-black text-white rounded-lg">
          Update Vendor
        </button>
      </div>
    </div>
  );
}
