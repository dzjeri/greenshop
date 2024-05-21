import axios from "axios";
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { ShoppingCart } from "../../components/ShoppingCart/ShoppingCart";
import { CartTotals } from "../../components/CartTotals/CartTotals";
import { RelatedProducts } from "../../components/RelatedProducts/RelatedProducts";
import classes from "./Cart.module.css";
import { CartContext } from "../../contexts/CartContext";

// TODO: Наверное, тут не нужен лоадер
// Товары из стейта, который из локалстореджа

const loader = async () => {
  const productsRequest = await axios.get("http://localhost:3001/products");

  // TODO: Убрать мап для айди, сделать в другом месте
  // мб в функции для фетчинга
  const products = productsRequest.data.map((p) => ({
    ...p,
    id: Number(p.id),
  }));

  return { products };
};

const Cart = () => {
  const { products: allProducts } = useLoaderData();
  const { cart } = useContext(CartContext);

  const crumbs = [
    {
      href: "/shop",
      text: "Shop",
    },
    {
      href: null,
      text: "Shopping Cart",
    },
  ];

  return (
    <div className={classes.cart}>
      <div className={classes.breadcrumbs}>
        <Breadcrumbs crumbs={crumbs} />
      </div>
      <div className={classes.cartBlock}>
        {cart.length > 0 ? (
          <div className={classes.cartInfo}>
            <ShoppingCart cart={cart} />
            <CartTotals cart={cart} />
          </div>
        ) : (
          <div className={classes.emptyBlock}>The cart is empty</div>
        )}
      </div>
      <RelatedProducts
        title={"You may be interested in"}
        products={allProducts.slice(0, 15)}
      />
    </div>
  );
};

export { Cart, loader };
