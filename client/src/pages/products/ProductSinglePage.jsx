import React from "react";
import SingleProductHeader from "../../components/products/singleProduct/SingleProductHeader";
import ProductDescription from "../../components/products/singleProduct/ProductDescription";
import useGetSingleProduct from "../../hooks/products/useGetSingleProduct";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

export default function ProductSinglePage() {
  const { id } = useParams();
  const { loading, product } = useGetSingleProduct({ id });

  return loading ? (
    <Loading />
  ) : (
    <div>
      <SingleProductHeader data={product} />
      <ProductDescription data={product} id={id} />
    </div>
  );
}
