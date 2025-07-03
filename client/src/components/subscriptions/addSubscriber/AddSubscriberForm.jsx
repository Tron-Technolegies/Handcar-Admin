import React, { useEffect, useState } from "react";
import FormInput from "../../FormInput";
import FormSelect from "../../FormSelect";
import useAddSubscriber from "../../../hooks/subscriptions/useAddSubscriber";
import Loading from "../../Loading";
import useGetAllVendors from "../../../hooks/vendors/useGetAllVendors";
import useFindVendorToAssign from "../../../hooks/subscriptions/useFindVendorToAssign";

export default function AddSubscriberForm() {
  const { loading, addSubscriber } = useAddSubscriber();
  const { loading: vendorLoading, vendors } = useGetAllVendors({ search: "" });
  const {
    loading: nearbyLoading,
    vendors: nearbyVendors,
    findVendors,
  } = useFindVendorToAssign();

  const [nearby, setNearBy] = useState(false);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [vendor, setVendor] = useState([]); 
  const [service, setService] = useState("Car Wash");
  const [plan, setPlan] = useState("Basic");
  const [duration, setDuration] = useState(6);
  const [start, setStart] = useState("");

  const handleSubmit = () => {
    addSubscriber({
      email,
      plan,
      duration,
      service,
      start,
      address,
      vendor,
    });
  };

  return (
    <div>
      <FormInput
        title={"Email"}
        type={"email"}
        value={email}
        onchange={(e) => setEmail(e.target.value)}
        placeholder={"Enter Email"}
      />
      <FormInput
        title={"Address"}
        type={"text"}
        value={address}
        onchange={(e) => setAddress(e.target.value)}
        placeholder={"Address"}
      />
      <button
        onClick={async () => {
          await findVendors({ address });
          setNearBy(true);
        }}
        className={`px-4 py-1 rounded-md bg-black text-white my-5 ${
          nearby && "hidden"
        }`}
      >
        Find Nearby Vendors
      </button>
      <button
        onClick={() => setNearBy(false)}
        className={`px-4 py-1 rounded-md bg-black text-white my-5 ${
          !nearby && "hidden"
        }`}
      >
        Assign Vendors Normally
      </button>

    
      {nearby ? (
        <div className="form-row">
          <label htmlFor="status" className="form-label">
            Assign Nearby Vendors
          </label>
          <div className="flex items-center">
            <select
              id="status"
              multiple
              value={vendor}
              onChange={(e) =>
                setVendor(
                  [...e.target.selectedOptions].map((opt) => parseInt(opt.value))
                )
              }
              className="w-full py-1 px-3 rounded-lg bg-[#F5F5F5] border border-gray-300 text-gray-900 h-28"
            >
              {nearbyVendors?.map((item) => (
                <option key={item.id} value={item.id}>
                  {`${item.name} (${item.address}) (${item.distance_km}km)`}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : vendorLoading ? (
        <Loading />
      ) : (
        <div className="form-row">
          <label htmlFor="status" className="form-label">
            Assign Vendors
          </label>
          <div className="flex items-center">
            <select
              id="status"
              multiple
              value={vendor}
              onChange={(e) =>
                setVendor(
                  [...e.target.selectedOptions].map((opt) => parseInt(opt.value))
                )
              }
              className="w-full py-1 px-3 rounded-lg bg-[#F5F5F5] border border-gray-300 text-gray-900 h-28"
            >
              {vendors?.map((item) => (
                <option key={item.id} value={item.id}>
                  {`${item.name} (${item.location})`}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* SERVICE / PLAN / DURATION / START DATE */}
      <FormSelect
        title={"Service"}
        value={service}
        onchange={(e) => setService(e.target.value)}
        list={["Car Wash", "Maintenance"]}
      />
      <FormSelect
        title={"Plan"}
        value={plan}
        onchange={(e) => setPlan(e.target.value)}
        list={["Basic", "Premium", "Luxuary"]}
      />
      <FormSelect
        title={"Duration (months)"}
        value={duration}
        onchange={(e) => setDuration(e.target.value)}
        list={[6, 12]}
      />
      <FormInput
        title={"Start Date"}
        value={start}
        onchange={(e) => setStart(e.target.value)}
        type={"date"}
      />

      {/* SUBMIT BUTTON */}
      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={handleSubmit}
          className="px-4 py-2 bg-black text-white rounded-lg"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Subscriber"}
        </button>
      </div>
    </div>
  );
}
