import { cartProductType } from "@/app/product/[productId]/ProductDetails";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

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
  useEffect(() => {
    const getProducts: any = localStorage.getItem("cartItems");
    const parseProducts: cartProductType[] | null = JSON.parse(getProducts);
    setCartProducts(parseProducts);
  }, []);
  const handleAddProductToCart = useCallback((product: cartProductType) => {
    let updatedCart;
    setCartProducts((prev) => {
      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }
      return updatedCart;
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    toast.success("Product added to cart");
  }, []);
  const handleRemoveProductFromCart = useCallback(
    (product: cartProductType) => {
      if (cartProducts) {
        const filteredProducts = cartProducts.filter(
          (item) => item.id !== product.id
        );
        setCartProducts(filteredProducts);
        localStorage.setItem("cartItems", JSON.stringify(filteredProducts));
        toast.success("Product removed");
      }
    },
    []
  );
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
