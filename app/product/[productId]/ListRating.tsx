"use client";
import Heading from "@/app/components/Heading";
import { product } from "@/utils/product";
import { Rating } from "@mui/material";
import moment from "moment";

type listRatingType = {
  product: typeof product;
};
const ListRating: React.FC<listRatingType> = ({ product }) => {
  return (
    <div>
      <Heading title="Product Review" />
      <div className="text-sm mt-2">
        {product.reviews.map((review) => {
          return (
            <div key={review.id} className=" ">
              <div className="flex gap-2 items-center">
                <div>Avatar</div>
                <div className="font-semibold">{review?.user.name}</div>
                <div className="font-light">
                  {moment(review.createdDate).fromNow()}
                </div>
              </div>
              <Rating value={review.rating} readOnly />
              <p className="ml-2">{review.comment}</p>
              <hr className="my-4" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListRating;
