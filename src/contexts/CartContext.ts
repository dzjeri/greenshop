import { createContext, useContext } from "react";
import { CartProduct } from "../types";

// mb add addProduct, removeProduct?

type TCartContext = {
  cart: CartProduct[];
  setCart: React.Dispatch<CartProduct[]>;
};

const CartContext = createContext<TCartContext | null>(null);

const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCartContext must be used with CartContext.Provider");

  return context;
};

export { CartContext, useCartContext };
