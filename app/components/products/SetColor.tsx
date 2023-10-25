import {
  cartProductType,
  selectedImgType,
} from "@/app/product/[productId]/ProductDetails";
import React from "react";
type setColorType = {
  images: selectedImgType[];
  cartProduct: cartProductType;
  handleColorSet: (value: selectedImgType) => void;
};
const SetColor: React.FC<setColorType> = ({
  images,
  cartProduct,
  handleColorSet,
}) => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <span className="uppercase font-semibold">color:</span>
        <div className="flex gap-1">
          {images.map((image) => {
            return (
              <div
                key={image.color}
                onClick={() => handleColorSet(image)}
                className={`h-7 w-7 rounded-full border-teal-300 flex items-center justify-center ${
                  cartProduct.selectImg.color === image.color
                    ? "border-[1.5px]"
                    : "border-none"
                }`}
              >
                <div
                  style={{ background: image.colorCode }}
                  className={`h-5 w-5 rounded-full border-[1.2px] border-slate-300`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SetColor;
