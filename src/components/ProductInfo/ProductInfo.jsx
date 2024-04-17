import {useState} from 'react';
import classes from './ProductInfo.module.css';
import Star from '../icons/Star';
import Heart from '../icons/Heart';
import FacebookLogo from '../icons/FacebookLogo';
import TwitterLogo from '../icons/TwitterLogo';
import LinkedinLogo from '../icons/LinkedinLogo';
import Mail from '../icons/Mail';
import CartAPI from '../../utils/cart';
import formatting from '../../utils/formatting'

const CATEGORIES = [
  'House Plants',
  'Potter Plants',
  'Seeds',
  'Small Plants',
  'Big Plants',
  'Succulents',
  'Trerrariums',
  'Gardening',
  'Accessories'
];

const shortenDescription = (description) => {
  return description.slice(0, 258) + '...';
};

const getAverageRating = (reviews) => Math.round(reviews.reduce((total, r) => total + r.mark, 0) / reviews.length);

const makeCategoriesString = (categoriesIds) => categoriesIds.map(id => CATEGORIES[id - 1]).join(', ');

const ProductInfo = ({ id, size, slug, src, SKU, categoriesIds, description, fullPrice, inStock, tag, title, reviews }) => {
  const productObject = {
    id,
    title,
    SKU,
    inStock,
    fullPrice,
    size,
    slug,
    src
  }
  const [isInCart, setIsInCart] = useState(CartAPI.contains(productObject));
  const [chosenSize, setChosenSize] = useState('S');
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

  const handleCartButtonClick = (productObject) => {
    if (CartAPI.contains(productObject)) CartAPI.remove(productObject);
    else CartAPI.add(productObject, quantity);

    setIsInCart(!isInCart);
  }

  return (
    <div className={classes.productInfo}>
      <h2>{title}</h2>
      <div className={classes.priceAndReviews}>
        <span className={classes.price}>{formatting.formatPrice(fullPrice)}</span>
        <div className={classes.reviewsBlock}>
          <div className={classes.stars}>
            <div className={averageRating >= 1 ? `${classes.star} ${classes.filled}` : classes.star}>
              <Star />
            </div>
            <div className={averageRating >= 2 ? `${classes.star} ${classes.filled}` : classes.star}>
              <Star />
            </div>
            <div className={averageRating >= 3 ? `${classes.star} ${classes.filled}` : classes.star}>
              <Star />
            </div>
            <div className={averageRating >= 4 ? `${classes.star} ${classes.filled}` : classes.star}>
              <Star />
            </div>
            <div className={averageRating >= 5 ? `${classes.star} ${classes.filled}` : classes.star}>
              <Star />
            </div>
          </div>
          <span className={classes.reviews}>{reviews ? reviews.length : 19} Customer Review</span>
        </div>
      </div>
      <div className={classes.description}>
        <b>Short Description: </b>
        <p>{shortenDescription(description)}</p>
      </div>
      <div className={classes.sizePicker}>
        <b>Size:</b>
        <div className={classes.buttons}>
          <button
            onClick={() => setChosenSize('S')}
            className={chosenSize === 'S' ? classes.active : undefined}
          >S</button>
          <button
            onClick={() => setChosenSize('M')}
            className={chosenSize === 'M' ? classes.active : undefined}
          >M</button>
          <button
            onClick={() => setChosenSize('L')}
            className={chosenSize === 'L' ? classes.active : undefined}
          >L</button>
          <button
            onClick={() => setChosenSize('XL')}
            className={chosenSize === 'XL' ? classes.active : undefined}
          >XL</button>
        </div>
      </div>
      <div className={classes.buyRow}>
        <div className={classes.amountPicker}>
          <button
            className={classes.minusButton + (quantity < 2 ? ` ${classes.disabled}` : '')}
            onClick={decreasequantity}
          ></button>
          <span className={classes.amount}>{quantity}</span>
          <button
            className={classes.plusButton + (quantity === inStock ? ` ${classes.disabled}` : '')}
            onClick={increasequantity}
          ></button>
        </div>
        <button className={classes.buyNowButton}>Buy Now</button>
        <button
          onClick={() => handleCartButtonClick(productObject)}
          className={classes.addToCartButton}
        >
          {isInCart
            ? 'In Cart'
            : 'Add to Cart'} 
        </button>
        <button className={classes.addToFavoritesButton}><Heart /></button>
      </div>
      <div className={classes.additionalInfo}>
        <div>
          <span className={classes.name}>SKU: </span>
          <span className={classes.content}>{SKU}</span>
        </div>
        <div>
          <span className={classes.name}>Categories: </span>
          <span className={classes.content}>{makeCategoriesString(categoriesIds)}</span>
        </div>
        <div>
          <span className={classes.name}>Tags: </span>
          <span className={classes.content}>{tag}</span>
        </div>
      </div>
      <div className={classes.shareLinks}>
        <b>Share this product:</b>
        <ul>
          <li><a href=""><FacebookLogo /></a></li>
          <li><a href=""><TwitterLogo /></a></li>
          <li><a href=""><LinkedinLogo /></a></li>
          <li><a href=""><Mail /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default ProductInfo