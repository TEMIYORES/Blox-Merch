"use client";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const CartCount = () => {
  const router = useRouter();
  const { cartTotalQty } = useCart();
  return (
    <div
      className="relative cursor-pointer"
      onClick={() => router.push("/cart")}
    >
      <CiShoppingCart size={32} />
      <span className="absolute top-[-10px] right-[-10px] bg-slate-700 text-white h-6 w-6 rounded-full flex items-center justify-center text-xs">
        {cartTotalQty}
      </span>
    </div>
  );
};

export default CartCount;
