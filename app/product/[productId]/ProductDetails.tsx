"use client";
import SetColor from "@/app/components/products/SetColor";
import { Rating } from "@mui/material";
import React, { useCallback, useState } from "react";
type ProductDetails = {
  product: any;
};
export type cartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectImg: selectedImgType;
  quantity: number;
  price: number;
};
export type selectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};
const Horizontal = () => {
  return <hr className="w-[30%] my-2"></hr>;
};
const ProductDetails = (props: ProductDetails) => {
  const { product } = props;
  const [cartProduct, setCardProduct] = useState<cartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });
  const handleColorSet = useCallback(
    (value: selectedImgType) => {
      setCardProduct((prev) => {
        return { ...prev, selectImg: value };
      });
    },
    [cartProduct.selectImg]
  );

  const productRating =
    product.reviews.reduce(
      (accumulator: number, item: any) => accumulator + item.rating,
      0
    ) / product.reviews.length;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>Images</div>
      <div className="flex flex-col gap-1 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <div className="flex items-center gap-1">
          <Rating value={productRating} readOnly />
          <p>{product.reviews.length} reviews</p>
        </div>
        <Horizontal />
        <p>{product.description}</p>
        <Horizontal />
        <div>
          <span className="uppercase font-semibold">category: </span>
          {product.category}
        </div>
        <div>
          <span className="uppercase font-semibold">brand: </span>
          {product.brand}
        </div>
        <div
          className={`${product.inStock ? "text-green-400" : "text-red-400"} `}
        >
          {product.inStock ? "In stock" : "Out of stock"}
        </div>
        <Horizontal />
        <SetColor
          cartProduct={cartProduct}
          images={product.images}
          handleColorSet={handleColorSet}
        />
        <Horizontal />
        <div>quality</div>
        <Horizontal />
        <div>add to cart</div>
      </div>
    </div>
  );
};

export default ProductDetails;
