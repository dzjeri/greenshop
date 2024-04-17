import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../icons/Cart';
import Heart from '../icons/Heart';
import Search from '../icons/Search';
import CartAPI from '../../utils/cart';
import classes from './Product.module.css';

const Product = ({ src, title, fullPrice, discountPrice = null, tag, slug, size, inStock, SKU, id }) => {
  const productObject = {
    id,
    title,
    SKU,
    inStock,
    fullPrice,
    size,
    slug,
    src
  };
  const [isInCart, setIsInCart] = useState(CartAPI.contains(productObject))
  const isOnSale = tag?.includes('sale') && discountPrice
  const discountPercentage = Math.floor((discountPrice - fullPrice) / discountPrice * 100);

  const handleCartButtonClick = (event, product) => {
    event.preventDefault();

    if (isInCart) CartAPI.remove(product);
    else CartAPI.add(product);

    setIsInCart(!isInCart);
  }
  
  return (
    <article className={classes.product}>
      <Link to={`/shop/${slug}`}>
        <div className={classes.photoContainer}>
          {isOnSale && <div className={classes.discount}>{discountPercentage + '% OFF'}</div>}
          <img src={src} alt="" />
        </div>
        <h4 className={classes.name}>{title}</h4>
        <div className={classes.priceBlock}>
          <span>{'$' + fullPrice + '.00'}</span>
          {discountPrice && <s>{'$' + discountPrice + '.00'}</s>}
        </div>
        <div className={classes.actionButtons}>
          <button
            className={isInCart ? `${classes.cartButton} ${classes.active}` : classes.cartButton}
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
  )
}

export default Product