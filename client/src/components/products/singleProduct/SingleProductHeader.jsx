import React from "react";
import ProductDetailElt from "./ProductDetailElt";
import GoBack from "../../GoBack";

export default function SingleProductHeader({ data }) {
  return (
    <div>
      <div className="flex sm:flex-row flex-col-reverse justify-between sm:gap-0 gap-5 sm:items-center items-start mb-10">
        <h1 className="text-2xl font-semibold ">{data.name}</h1>
        <GoBack route={"/products"} />
      </div>
      <div className="flex md:flex-row flex-col gap-5 justify-around items-center">
        <img
          src={data.image}
          className="md:max-w-[400px] max-w-[300px] rounded-lg"
        ></img>
        <div className="p-5 bg-[#F5F5F5] rounded-lg flex flex-col gap-3">
          <ProductDetailElt type={"Product Name"} value={data.name} />
          <ProductDetailElt
            type={"Model"}
            value={data.model ? data.model : "N/A"}
          />
          <ProductDetailElt type={"Stock"} value={data.stock || "N/A"} />
          <ProductDetailElt type={"Brand"} value={data.brand_name} />
          <ProductDetailElt type={"Price"} value={`$ ${data.price}`} />
          <ProductDetailElt
            type={"Discount"}
            value={data.discount_percentage}
          />
          <ProductDetailElt type={"Category"} value={data.category_name} />
        </div>
      </div>
    </div>
  );
}
