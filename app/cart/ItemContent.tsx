"use client";
import React from "react";
import { cartProductType } from "../product/[productId]/ProductDetails";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import SetQuantity from "../components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";
type itemContentType = {
  product: cartProductType;
};
const ItemContent = ({ product }: itemContentType) => {
  const {
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
  } = useCart();
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-200 py-4 items-center">
      <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
        <Link href={`/product/${product.id}`}>
          <div className="relative w-[70px] aspect-square">
            <Image
              sizes="w-full"
              src={product.selectImg.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/product/${product.id}`}>
            {truncateText(product.name)}
          </Link>
          <div>{product.selectImg.color}</div>
          <div className="w-fit">
            <button
              className="text-slate-500 underline"
              onClick={() => {
                handleRemoveProductFromCart(product);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="justify-self-center">{formatPrice(product.price)}</div>
      <div className="justify-self-center">
        <SetQuantity
          isCartCounter={true}
          cartProduct={product}
          handleQtyIncrease={() => handleCartQtyIncrease(product)}
          handleQtydecrease={() => handleCartQtyDecrease(product)}
        />
      </div>
      <div className="justify-self-end font-semibold">
        {formatPrice(product.price * product.quantity)}
      </div>
    </div>
  );
};

export default ItemContent;
