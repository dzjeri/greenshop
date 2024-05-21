import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Cart, Heart, Search } from "../../icons/";
import CartAPI from "../../utils/cart";
import classes from "./Product.module.css";
import { CartContext } from "../../contexts/CartContext";

const Product = ({
  src,
  title,
  fullPrice,
  discountPrice = null,
  tag,
  slug,
  size,
  inStock,
  SKU,
  id,
}) => {
  const productObject = {
    id,
    title,
    SKU,
    inStock,
    fullPrice,
    size,
    slug,
    src,
  };
  const { cart, setCart } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(
    CartAPI.cartContains(cart, productObject)
  );

  const isOnSale = tag?.includes("sale") && discountPrice;
  const discountPercentage = Math.floor(
    ((discountPrice - fullPrice) / discountPrice) * 100
  );

  const handleCartButtonClick = (event, product) => {
    event.preventDefault();

    if (isInCart) {
      const filteredCart = cart.filter((p) => p.id !== productObject.id);
      setCart(filteredCart);
    } else {
      product.quantity = 1;
      const newCart = [...cart, product];
      setCart(newCart);
    }

    setIsInCart(!isInCart);
  };

  return (
    <article className={classes.product}>
      <Link to={`/shop/${slug}`}>
        <div className={classes.photoContainer}>
          {isOnSale && (
            <div className={classes.discount}>
              {discountPercentage + "% OFF"}
            </div>
          )}
          <img src={src} alt="" />
        </div>
        <h4 className={classes.name}>{title}</h4>
        <div className={classes.priceBlock}>
          <span>{"$" + fullPrice + ".00"}</span>
          {discountPrice && <s>{"$" + discountPrice + ".00"}</s>}
        </div>
        <div className={classes.actionButtons}>
          <button
            className={
              isInCart
                ? `${classes.cartButton} ${classes.active}`
                : classes.cartButton
            }
            onClick={(event) => handleCartButtonClick(event, productObject)}
          >
            <Cart />
          </button>
          <button className={classes.heartButton}>
            <Heart />
          </button>
          <button className={classes.searchButton}>
            <Search />
          </button>
        </div>
      </Link>
    </article>
  );
};

export { Product };
