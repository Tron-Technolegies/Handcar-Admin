import React, { useState } from "react";
import PromotionHeader from "../../components/promotions/PromotionHeader";
import PromotedProductCard from "../../components/promotions/PromotedProductCard";
import PromotedBrandCard from "../../components/promotions/PromotedBrandCard";

export default function PromotionPage() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <PromotionHeader
        title={"Promoted Products"}
        search={search}
        setSearch={setSearch}
      />
      <div className="flex flex-col gap-3 ">
        <PromotedProductCard />
        <PromotedProductCard />
        <PromotedProductCard />
        <PromotedProductCard />
        <PromotedProductCard />
      </div>
      <PromotionHeader
        title={"Promoted Brand"}
        search={search}
        setSearch={setSearch}
      />
      <PromotedBrandCard />
    </div>
  );
}
