import { ProductRow } from "./ProductRow";
import { Cart } from "../../types";
import classes from "./ShoppingCart.module.css";

const ShoppingCart = ({ cart }: Cart) => {
  return (
    <div className={classes.shoppingCart}>
      <div className={classes.header}>
        <b>Products</b>
        <b>Price</b>
        <b>Quantity</b>
        <b>Total</b>
      </div>
      <ul className={classes.products}>
        {cart?.map((p) => (
          <li key={p.id}>
            <ProductRow {...p} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ShoppingCart };
