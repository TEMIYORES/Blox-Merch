import React from "react";
type ProductParams = {
  productId?: string;
};
import { product } from "@/utils/product";
import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";

const Product = ({ params }: { params: ProductParams }) => {
  return (
    <Container>
      <ProductDetails product={product} />
      <div>Add Rating</div>
      <ListRating product={product} />
    </Container>
  );
};

export default Product;
