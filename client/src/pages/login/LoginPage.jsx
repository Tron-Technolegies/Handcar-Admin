import { motion } from "framer-motion";
import React from "react";
import FormInput from "../../components/FormInput";

export default function LoginPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="xl:w-1/3 md:w-1/2 sm:w-3/4 w-11/12 mx-auto flex flex-col gap-5 items-center bg-white border border-[#A5A5A5] py-5"
      >
        <img src="/logo.png" className="w-[150px]"></img>
        <h4 className="text-xl font-semibold">ADMIN LOGIN</h4>
        <div className="w-full px-10 flex flex-col gap-3">
          <FormInput type={"email"} placeholder={"example@gmail.com"} />
          <FormInput placeholder={"Password"} type={"password"} />
        </div>
        <div className="w-full px-10 flex flex-col gap-3 items-center">
          <button className="px-5 py-3 bg-[#DB1215] rounded-lg w-full text-white font-semibold">
            Login
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
