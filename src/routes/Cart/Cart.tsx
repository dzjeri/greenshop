import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { ShoppingCart } from "../../components/ShoppingCart/ShoppingCart";
import { CartTotals } from "../../components/CartTotals/CartTotals";
import { RelatedProducts } from "../../components/RelatedProducts/RelatedProducts";
import { Product, Cart as TCart } from "../../types";
import classes from "./Cart.module.css";
import { CartContext, useCartContext } from "../../contexts/CartContext";

const loader = async () => {
  const productsRequest = await axios.get("http://localhost:3001/products");

  // TODO: Убрать мап для айди, сделать в другом месте
  // мб в функции для фетчинга
  const products = productsRequest.data.map((p: Product) => ({
    ...p,
    id: Number(p.id),
  }));

  return { products };
};

const Cart = () => {
  const { products: allProducts } = useLoaderData() as { products: Product[] };
  const { cart } = useCartContext();

  const cartLength: number = cart?.length || 0;

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
        {cartLength > 0 ? (
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
