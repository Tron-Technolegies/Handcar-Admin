import React, { useEffect, useState } from "react";
import FormInput from "../../FormInput";
import { FiUpload } from "react-icons/fi";
import FormSelect from "../../FormSelect";
import useGetSingleProduct from "../../../hooks/products/useGetSingleProduct";
import { useParams } from "react-router-dom";
import Loading from "../../Loading";
import useEditProduct from "../../../hooks/products/useEditProduct";
import useGetAllCategories from "../../../hooks/category/useGetAllCategories";
import useGetAllBrands from "../../../hooks/brands/useGetAllBrands";

export default function EditProductForm() {
  const { id } = useParams();
  const { loading, product } = useGetSingleProduct({ id });
  const { loading: editLoading, editProduct } = useEditProduct();
  const { categories, loading: categoryLoading } = useGetAllCategories({
    search: "",
  });
  const { brands, loading: brandLoading } = useGetAllBrands({ search: "" });
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState();
  const [images, setImages] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState(0);
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.name);
      setCategory(product.category_name);
      setBrand(product.brand_name);
      setImages(product.image);
      setPrice(product.price);
      setDiscount(product.discount_percentage);
      setStock(product.stock ? product.stock : 0);
      setDescription(product.description);
    }
  }, [loading]);
  useEffect(() => {
    if (categories?.length > 0) {
      setCategory(categories[0].name);
    }
  }, [categoryLoading]);
  useEffect(() => {
    if (brands?.length > 0) {
      setBrand(brands[0].name);
    }
  }, [brandLoading]);
  return loading ? (
    <Loading />
  ) : (
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
      <div className="flex items-center gap-3 mb-3">
        <div className="flex flex-col ">
          <label className="text-sm mb-3">Product Image</label>
          <label className="w-16 h-16 border rounded-lg border-[#959595] text-[#959595] text-3xl flex justify-center items-center cursor-pointer">
            <FiUpload />
            <input
              type="file"
              hidden
              onChange={(e) => {
                setImage(e.target.files[0]);
                setImages(e.target.files[0].name);
              }}
            />
          </label>
        </div>
        <p>{images}</p>
      </div>

      <FormInput
        title={"Price"}
        type={"number"}
        placeholder={"10"}
        value={price}
        onchange={(e) => setPrice(e.target.value)}
      />
      <FormInput
        title={"Discount"}
        type={"number"}
        placeholder={"10"}
        value={discount}
        onchange={(e) => setDiscount(e.target.value)}
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
      <div className="flex justify-end">
        <button
          onClick={() =>
            editProduct({
              id,
              name,
              category_name: category,
              brand_name: brand,
              image: image && image,
              price,
              description,
              stock,
              discount,
            })
          }
          className="px-4 py-2 rounded-lg bg-black text-white"
        >
          Update Product
        </button>
        {loading && <Loading />}
      </div>
    </div>
  );
}
