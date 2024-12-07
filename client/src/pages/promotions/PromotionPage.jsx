import React, { useContext, useEffect, useState } from "react";
import PromotionHeader from "../../components/promotions/PromotionHeader";
import PromotedProductCard from "../../components/promotions/PromotedProductCard";
import PromotedBrandCard from "../../components/promotions/PromotedBrandCard";
import useGetAllPromotedProducts from "../../hooks/promotions/useGetAllPromotedProducts";
import Loading from "../../components/Loading";
import { AdminContext } from "../../AdminContext";
import useGetPromotedBrand from "../../hooks/promotions/useGetPromotedBrand";

export default function PromotionPage() {
  const [search, setSearch] = useState("");
  const [brandSearch, setBrandSearch] = useState("");
  const { loading, products, refetch } = useGetAllPromotedProducts();
  const {
    loading: brandLoading,
    brand,
    refetch: brandRefetch,
  } = useGetPromotedBrand();
  const { refetchTrigger } = useContext(AdminContext);

  useEffect(() => {
    refetch();
    brandRefetch();
  }, [refetchTrigger]);

  return (
    <div>
      <PromotionHeader
        title={"Promoted Products"}
        search={search}
        setSearch={setSearch}
        type={"product"}
      />
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-3 ">
          {products.length > 0 ? (
            products.map((x) => (
              <div key={x.id}>
                <PromotedProductCard name={x.name} id={x.id} />
              </div>
            ))
          ) : (
            <p className="mb-5 text-2xl">No Products to Show</p>
          )}
        </div>
      )}

      <PromotionHeader
        title={"Promoted Brand"}
        search={brandSearch}
        setSearch={setBrandSearch}
        type={"brand"}
      />
      {brandLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-3 ">
          {brand.length > 0 ? (
            brand.map((x) => (
              <div key={x.id}>
                <PromotedBrandCard name={x.name} id={x.id} />
              </div>
            ))
          ) : (
            <p className="mb-5 text-2xl">No Brands to Show</p>
          )}
        </div>
      )}
    </div>
  );
}
