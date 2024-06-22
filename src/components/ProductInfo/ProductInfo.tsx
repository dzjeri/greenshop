import { useState, useContext } from "react";
import cn from "classnames";
import classes from "./ProductInfo.module.css";
import {
  Star,
  Heart,
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
  Mail,
} from "../../icons";
import CartAPI from "../../utils/cart";
import formatting from "../../utils/formatting";
import { useCartContext } from "../../contexts/CartContext";
import { CartProduct, Product, Review } from "../../types";

const RATINGS = [1, 2, 3, 4, 5];

const CATEGORIES = [
  "House Plants",
  "Potter Plants",
  "Seeds",
  "Small Plants",
  "Big Plants",
  "Succulents",
  "Trerrariums",
  "Gardening",
  "Accessories",
];

const SIZES = ["S", "M", "L", "XL"];

const LINKS = {
  facebook: {
    id: 1,
    href: "https://www.facebook.com/",
    icon: <FacebookLogo />,
  },
  twitter: {
    id: 2,
    href: "https://twitter.com/",
    icon: <TwitterLogo />,
  },
  linkedin: {
    id: 3,
    href: "https://www.linkedin.com/",
    icon: <LinkedinLogo />,
  },
  mail: {
    id: 4,
    href: "mailto:someaddress@somesite.com",
    icon: <Mail />,
  },
};

const shortenDescription = (description: string) => {
  return description.slice(0, 258) + "...";
};

const getAverageRating = (reviews: Review[]) =>
  Math.round(reviews.reduce((total, r) => total + r.mark, 0) / reviews.length);

const makeCategoriesString = (categoriesIds: number[]) =>
  categoriesIds.map((id) => CATEGORIES[id - 1]).join(", ");

type ProductInfoProps = Product & { reviews: Review[] };

const ProductInfo = ({
  id,
  size,
  slug,
  src,
  SKU,
  categoriesIds,
  description,
  fullPrice,
  inStock,
  tag,
  title,
  reviews,
}: ProductInfoProps) => {
  const productObject = {
    id,
    title,
    SKU,
    inStock,
    fullPrice,
    size,
    slug,
    src,
    quantity: 1,
  };
  const { cart, setCart } = useCartContext();
  const [isInCart, setIsInCart] = useState(
    CartAPI.cartContains(cart, productObject)
  );
  const [chosenSize, setChosenSize] = useState(SIZES[0]);
  const [quantity, setQuantity] = useState(1);
  const averageRating = getAverageRating(reviews);

  const increasequantity = () => {
    if (quantity === inStock) return;
    setQuantity(quantity + 1);
  };
  const decreasequantity = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  const handleSizeClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    setChosenSize(e.currentTarget.dataset.size!);

  const handleCartButtonClick = (productObject: CartProduct) => {
    if (isInCart) {
      const filteredCart = cart.filter(
        (p: CartProduct) => p.id !== productObject.id
      );
      setCart(filteredCart);
    } else {
      productObject.quantity = quantity;
      const newCart = [...cart, productObject];
      setCart(newCart);
    }

    setIsInCart(!isInCart);
  };

  return (
    <div className={classes.productInfo}>
      <h2>{title}</h2>
      <div className={classes.priceAndReviews}>
        <span className={classes.price}>
          {formatting.formatPrice(fullPrice)}
        </span>
        <div className={classes.reviewsBlock}>
          <div className={classes.stars}>
            {RATINGS.map((r) => (
              <div
                key={r}
                className={cn(classes.star, {
                  [classes.filled]: averageRating >= r,
                })}
              >
                <Star />
              </div>
            ))}
          </div>
          <span className={classes.reviews}>
            {reviews.length} Customer{" "}
            {reviews.length === 1 ? "Review" : "Reviews"}
          </span>
        </div>
      </div>
      <div className={classes.description}>
        <b>Short Description: </b>
        <p>{shortenDescription(description)}</p>
      </div>
      <div className={classes.sizePicker}>
        <b>Size:</b>
        <div className={classes.buttons}>
          {SIZES.map((size) => (
            <button
              key={size}
              data-size={size}
              onClick={handleSizeClick}
              className={cn({ [classes.active]: chosenSize === size })}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className={classes.buyRow}>
        <div className={classes.amountPicker}>
          <button
            className={cn(classes.minusButton, {
              [classes.disabled]: quantity < 2,
            })}
            onClick={decreasequantity}
          ></button>
          <span className={classes.amount}>{quantity}</span>
          <button
            className={cn(classes.plusButton, {
              [classes.disabled]: quantity === inStock,
            })}
            onClick={increasequantity}
          ></button>
        </div>
        <button className={classes.buyNowButton}>Buy Now</button>
        <button
          onClick={() => handleCartButtonClick(productObject)}
          className={classes.addToCartButton}
        >
          {isInCart ? "In Cart" : "Add to Cart"}
        </button>
        <button className={classes.addToFavoritesButton}>
          <Heart />
        </button>
      </div>
      <div className={classes.additionalInfo}>
        <div>
          <span className={classes.name}>SKU: </span>
          <span className={classes.content}>{SKU}</span>
        </div>
        <div>
          <span className={classes.name}>Categories: </span>
          <span className={classes.content}>
            {makeCategoriesString(categoriesIds)}
          </span>
        </div>
        <div>
          <span className={classes.name}>Tags: </span>
          <span className={classes.content}>{tag?.join(", ")}</span>
        </div>
      </div>
      <div className={classes.shareLinks}>
        <b>Share this product:</b>
        <ul>
          {Object.values(LINKS).map((link) => (
            <li key={link.id}>
              <a className={classes.shareLink} href={link.href}>
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { ProductInfo };
