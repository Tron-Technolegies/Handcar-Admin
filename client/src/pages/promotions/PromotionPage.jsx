import React from "react";
import PromotionHeader from "../../components/promotions/PromotionHeader";
import PromotedProductCard from "../../components/promotions/PromotedProductCard";
import PromotedBrandCard from "../../components/promotions/PromotedBrandCard";

export default function PromotionPage() {
  return (
    <div>
      <PromotionHeader title={"Promoted Products"} />
      <div className="flex flex-col gap-3 ">
        <PromotedProductCard />
        <PromotedProductCard />
        <PromotedProductCard />
        <PromotedProductCard />
        <PromotedProductCard />
      </div>
      <PromotionHeader title={"Promoted Brand"} />
      <PromotedBrandCard />
    </div>
  );
}
