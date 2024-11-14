import React from "react";
import OfferHeader from "../../components/offers/OfferHeader";
import SingleCoupon from "../../components/offers/SingleCoupon";

export default function OfferPage() {
  return (
    <div>
      <OfferHeader />
      <div className="grid grid-cols-2 gap-5">
        <SingleCoupon />
        <SingleCoupon />
        <SingleCoupon />
        <SingleCoupon />
        <SingleCoupon />
        <SingleCoupon />
      </div>
    </div>
  );
}
