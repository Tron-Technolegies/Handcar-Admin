import React, { useContext } from "react";
import Loading from "../Loading";
import useAssignPromotedProduct from "../../hooks/promotions/useAssignPromotedProduct";
import { AdminContext } from "../../AdminContext";
import useAssignPromotedBrand from "../../hooks/promotions/useAssignPromotedBrand";

const SearchList = ({ products, loading, type, setList }) => {
  const { assignPromotedProduct } = useAssignPromotedProduct();
  const { assignPromotedBrand } = useAssignPromotedBrand();
  const { refetchTrigger, setRefetchTrigger } = useContext(AdminContext);
  async function handleClick(id) {
    await assignPromotedProduct({ id });
    setList(false);
    setRefetchTrigger(!refetchTrigger);
  }

  async function handleBrandClick(id) {
    await assignPromotedBrand({ id });
    setList(false);
    setRefetchTrigger(!refetchTrigger);
  }
  return (
    <div className="p-5 absolute top-12 shadow-lg w-full z-10 bg-white rounded-md overflow-scroll max-h-[150px]">
      <button onClick={() => setList(false)} className="text-sm font-bold">
        x
      </button>
      {loading ? (
        <Loading />
      ) : (
        products?.length > 0 &&
        products.map((x) => (
          <div
            key={x.id}
            className="flex justify-between gap-5 my-2 border-b pb-1"
          >
            <p>{x.name}</p>
            <button
              onClick={
                type === "brand"
                  ? () => handleBrandClick(x.id)
                  : () => handleClick(x.id)
              }
              className=""
            >
              +
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchList;
