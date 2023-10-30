import { cartProductType } from "@/app/product/[productId]/ProductDetails";
import { createContext, useCallback, useContext, useState } from "react";

type CartContextType = {
  cartTotalQty: number;
  cartProducts: cartProductType[] | null;
  handleAddProductToCart: (product: cartProductType) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

type PropsType = {
  [propName: string]: any;
};

export const CartContextProvider = (props: PropsType) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartProducts, setCartProducts] = useState<cartProductType[] | null>(
    null
  );
  const handleAddProductToCart = useCallback((product: cartProductType) => {
    setCartProducts((prev) => (prev ? [...prev, product] : [product]));
  }, []);
  const value = {
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
  };
  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart Hook must be used in a CartContextProvider");
  }
  return context;
};
