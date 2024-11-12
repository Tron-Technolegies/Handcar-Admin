import React from "react";
import ProductDetailElt from "./ProductDetailElt";
import GoBack from "../../GoBack";

export default function SingleProductHeader() {
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-semibold ">Product Name</h1>
        <GoBack route={"/products"} />
      </div>
      <div className="flex justify-around items-center">
        <img
          src="/dashboard/product.png"
          className="max-w-[400px] rounded-lg"
        ></img>
        <div className="p-5 bg-[#F5F5F5] rounded-lg flex flex-col gap-3">
          <ProductDetailElt type={"Product Name"} value={"Dash Cam"} />
          <ProductDetailElt type={"Model"} value={"A8006"} />
          <ProductDetailElt type={"Stock"} value={"10"} />
          <ProductDetailElt type={"Brand"} value={"xxxxxx"} />
          <ProductDetailElt type={"Price"} value={"$ 20.00"} />
          <ProductDetailElt type={"Category"} value={"xxxxx"} />
        </div>
      </div>
    </div>
  );
}
