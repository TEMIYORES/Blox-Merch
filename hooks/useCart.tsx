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
  handleRemoveProductFromCart: (product: cartProductType) => void;
  handleCartQtyIncrease: (product: cartProductType) => void;
  handleCartQtyDecrease: (product: cartProductType) => void;
  handleClearCart: () => void;
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
    toast.success("Product added to cart successfully");
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
  const handleCartQtyIncrease = useCallback(
    (product: cartProductType) => {
      let updatedCart;
      if (product.quantity === 99) {
        return toast.error("Oops! maximum order reached");
      }
      if (cartProducts) {
        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );
        if (existingIndex > -1) {
          updatedCart = [...cartProducts];
          updatedCart[existingIndex].quantity += 1;
          setCartProducts(updatedCart);
          localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        }
      }
    },
    [cartProducts]
  );
  const handleCartQtyDecrease = useCallback(
    (product: cartProductType) => {
      let updatedCart;
      if (product.quantity === 1) {
        return toast.error("Oops! maximum order reached");
      }
      if (cartProducts) {
        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );
        if (existingIndex > -1) {
          updatedCart = [...cartProducts];
          updatedCart[existingIndex].quantity -= 1;
          setCartProducts(updatedCart);
          localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        }
      }
    },
    [cartProducts]
  );
  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    setCartTotalQty(0);
    localStorage.removeItem("cartItems");
    toast.success("Cart cleared");
  }, [cartProducts]);
  const value = {
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
    handleClearCart,
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
