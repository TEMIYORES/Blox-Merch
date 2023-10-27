"use client";
import { product } from "@/utils/product";
import {
  cartProductType,
  selectedImgType,
} from "@/app/product/[productId]/ProductDetails";
import Image from "next/image";

type productImageType = {
  cartProduct: cartProductType;
  product: typeof product;
  handleSelectColor: (value: selectedImgType) => void;
};
const ProductImage: React.FC<productImageType> = ({
  cartProduct,
  product,
  handleSelectColor,
}) => {
  return (
    <div className="grid grid-cols-6 items-center gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
      <div className="flex flex-col justify-center items-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        {product.images.map((image) => {
          return (
            <div
              className={`relative w-[80%] aspect-square rounded ${
                cartProduct.selectImg.color === image.color &&
                "border border-teal-500"
              }`}
              onClick={() => handleSelectColor(image)}
            >
              <Image
                key={image.color}
                fill
                sizes="w-full"
                src={image.image}
                alt={image.color}
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
      <div className="col-span-5 relative aspect-square">
        <Image
          fill
          sizes="w-full"
          alt={cartProduct.name}
          src={cartProduct.selectImg.image}
          className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"
        />
      </div>
    </div>
  );
};

export default ProductImage;
