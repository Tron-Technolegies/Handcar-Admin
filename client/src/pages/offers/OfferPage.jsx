import React, { useContext, useEffect } from "react";
import OfferHeader from "../../components/offers/OfferHeader";
import SingleCoupon from "../../components/offers/SingleCoupon";
import useGetAllCoupons from "../../hooks/offers/useGetAllCoupons";
import Loading from "../../components/Loading";
import { AdminContext } from "../../AdminContext";

export default function OfferPage() {
  const { loading, coupons, refetch } = useGetAllCoupons();
  const { refetchTrigger } = useContext(AdminContext);

  useEffect(() => {
    refetch();
  }, [refetchTrigger]);
  return (
    <div>
      <OfferHeader />
      {loading ? (
        <Loading />
      ) : (
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
          {coupons.map((x) => (
            <div key={x.id}>
              <SingleCoupon
                name={x.name}
                code={x.coupon_code}
                discount={x.discount_percentage}
                id={x.id}
                start={x.start_date}
                end={x.end_date}
                desc={x.description}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
