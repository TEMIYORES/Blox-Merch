import React from "react";
type ProductParams = {
  productId?: string;
};
import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import { products } from "@/utils/products";

const Product = ({ params }: { params: ProductParams }) => {
  const product = products.find((product) => product.id === params.productId);
  return (
    <Container>
      <ProductDetails product={product} />
      <div>Add Rating</div>
      <ListRating product={product} />
    </Container>
  );
};

export default Product;
