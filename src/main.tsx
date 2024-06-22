import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing";
import { CartContext } from "./contexts/CartContext";
import "./index.css";

const App = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("greenshopCart") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("greenshopCart", JSON.stringify(cart));
  }, [cart]);

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

const rootDiv = document.getElementById("root");
if (!rootDiv) throw new Error("The element #root doesn't exist");

ReactDOM.createRoot(rootDiv).render(<App />);
