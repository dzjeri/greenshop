import { Link } from "react-router-dom";
import classes from "./ProductRow.module.css";
import { Trash } from "../../icons";
import { useCartContext } from "../../contexts/CartContext";
import { CartProduct } from "../../types";

const ProductRow = (product: CartProduct) => {
  const { cart, setCart } = useCartContext();

  const { id, slug, title, fullPrice, src, inStock, SKU, quantity } = product;
  const totalPrice = fullPrice * quantity!;

  const handleQuantityIncrement = () => {
    const oldQuantity = cart.find((p: CartProduct) => p.id === id)!.quantity;
    if (oldQuantity < inStock) {
      const updatedProduct = { ...product, quantity: quantity! + 1 };
      const updatedCart = cart.map((p: CartProduct) =>
        p.id === id ? updatedProduct : p
      );
      setCart(updatedCart);
    }
  };
  const handleQuantityDecrement = () => {
    const oldQuantity = cart.find((p: CartProduct) => p.id === id)!.quantity;
    if (oldQuantity > 1) {
      const updatedProduct = { ...product, quantity: quantity! - 1 };
      const updatedCart = cart.map((p: CartProduct) =>
        p.id === id ? updatedProduct : p
      );
      setCart(updatedCart);
    }
  };
  const handleRemove = () => {
    const filteredCart = cart.filter((p: CartProduct) => p.id !== id);
    setCart(filteredCart);
  };

  return (
    <div className={classes.productRow}>
      <Link to={`/shop/${slug}`} className={classes.product}>
        <div className={classes.productPhotoContainer}>
          <img className={classes.productPhoto} src={src} alt="plant photo" />
        </div>
        <b className={classes.productTitle}>{title}</b>
        <p className={classes.productSKU}>
          <span className={classes.grayColored}>SKU: </span>
          {SKU}
        </p>
      </Link>
      <div className={classes.price}>{`$${fullPrice}.00`}</div>
      <div className={classes.quantity}>
        <button
          onClick={handleQuantityDecrement}
          className={`${classes.button} ${classes.minusButton} ${
            quantity! <= 1 ? classes.disabled : ""
          }`}
        ></button>
        <span className={classes.quantityValue}>{quantity}</span>
        <button
          onClick={handleQuantityIncrement}
          className={`${classes.button} ${classes.plusButton} ${
            quantity! >= inStock ? classes.disabled : ""
          }`}
        ></button>
      </div>
      <div className={classes.total}>{`$${totalPrice}.00`}</div>
      <div className={classes.removeButton}>
        <button onClick={handleRemove}>
          <Trash />
        </button>
      </div>
    </div>
  );
};

export { ProductRow };
