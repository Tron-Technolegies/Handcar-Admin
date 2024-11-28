import React, { useState } from "react";
import FormInput from "../../FormInput";
import FormSelect from "../../FormSelect";
import { FiUpload } from "react-icons/fi";
import useGetAllCategories from "../../../hooks/category/useGetAllCategories";
import useGetAllBrands from "../../../hooks/brands/useGetAllBrands";
import useAddProduct from "../../../hooks/products/useAddProduct";
import useAddProductImage from "../../../hooks/products/useAddProductImage";

export default function AddNewProductForm() {
  const { categories } = useGetAllCategories();
  const { brands } = useGetAllBrands();
  const { loading, addProduct } = useAddProduct();
  const { addImage, data } = useAddProductImage();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="my-10">
      <FormInput
        title={"Name"}
        type={"text"}
        value={name}
        onchange={(e) => setName(e.target.value)}
        placeholder={"Enter Product Name"}
      />
      <FormSelect
        title={"Category"}
        list={categories?.map((x) => x.name)}
        value={category}
        onchange={(e) => setCategory(e.target.value)}
      />
      <FormSelect
        title={"Brand"}
        list={brands?.map((x) => x.name)}
        value={brand}
        onchange={(e) => setBrand(e.target.value)}
      />
      <div className="flex flex-col mb-3">
        <label className="text-sm mb-3">Product Image</label>
        <label className="w-16 h-16 border rounded-lg border-[#959595] text-[#959595] text-3xl flex justify-center items-center cursor-pointer">
          <FiUpload />
          <input
            type="file"
            hidden
            value={image}
            onChange={(e) => addImage(e)}
          />
        </label>
      </div>

      <FormInput
        title={"Price"}
        type={"number"}
        placeholder={"10"}
        value={price}
        onchange={(e) => setPrice(e.target.value)}
      />
      <FormInput
        title={"Stock"}
        type={"number"}
        placeholder={"10"}
        value={stock}
        onchange={(e) => setStock(e.target.value)}
      />
      <div className="flex flex-col mb-3">
        <label className="text-sm mb-3">Description</label>
        <textarea
          rows={7}
          placeholder="Enter your description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="px-3 py-2 bg-[#F5F5F5] rounded-lg border border-gray-300 text-gray-900"
        ></textarea>
      </div>
      <div
        className="flex justify-end"
        onClick={() =>
          addProduct({
            name,
            category_id: category,
            brand_id: brand,
            description,
            price,
            image: data,
            discount_percentage: stock,
          })
        }
      >
        <button className="px-4 py-2 rounded-lg bg-black text-white">
          Save Product
        </button>
      </div>
    </div>
  );
}
