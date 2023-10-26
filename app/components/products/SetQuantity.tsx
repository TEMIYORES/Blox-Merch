import { cartProductType } from "@/app/product/[productId]/ProductDetails";
import React from "react";
type setQtyType = {
  isCartCounter?: Boolean;
  cartProduct: cartProductType;
  handleQtyIncrease: () => void;
  handleQtydecrease: () => void;
};
const btnStyles = "border-[1.2px] border-slate-300 px-2 rounded-sm";
const SetQuantity: React.FC<setQtyType> = ({
  isCartCounter,
  cartProduct,
  handleQtyIncrease,
  handleQtydecrease,
}) => {
  return (
    <div className="flex gap-8 items-center">
      {isCartCounter ? null : <div className="font-semibold">QUANTITY:</div>}
      <div className="flex gap-4 items-center text-base">
        <button className={btnStyles} onClick={handleQtydecrease}>
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <button className={btnStyles} onClick={handleQtyIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
