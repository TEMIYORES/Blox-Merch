import React from "react";
type ProductParams = {
  productId?: string;
};
import { product } from "@/utils/product";
import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";

const Product = ({ params }: { params: ProductParams }) => {
  return (
    <Container>
      <ProductDetails product={product} />
    </Container>
  );
};

export default Product;
