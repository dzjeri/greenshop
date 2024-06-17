import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing";
import { CartContext } from "./contexts/CartContext";
import "./index.css";

// const cart = JSON.parse(localStorage.getItem("greenshopCart"));
// console.log(cart);

const App = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("greenshopCart"))
  );
  useEffect(() => {
    localStorage.setItem("greenshopCart", JSON.stringify(cart));
  }, [cart]);

  // TODO: Передавать setCart(), чтобы при добавлении товара в корзинку менять стейт

  return (
    <React.StrictMode>
      <CartContext.Provider
        value={{
          cart,
          setCart,
        }}
      >
        <RouterProvider router={router} />
      </CartContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
