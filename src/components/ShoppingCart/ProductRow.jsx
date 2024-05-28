import { Link } from 'react-router-dom'
import classes from './ProductRow.module.css'
import Trash from '../icons/Trash'
import CartAPI from '../../utils/cart'

const ProductRow = (product) => {
  const { slug, title, fullPrice, src, inStock, SKU, quantity, updateCart } = product;
  const totalPrice = fullPrice * quantity;

  const handleQuantityIncrement = () => {
    if (quantity < inStock) CartAPI.increaseQuantity(product);
    updateCart();
  };
  const handleQuantityDecrement = () => {
    if (quantity > 1) CartAPI.decreaseQuantity(product);
    updateCart();
  };
  const handleRemove = () => {
    CartAPI.remove(product);
    updateCart();
  };

  return (
    <div className={classes.productRow}>
      <Link to={`/shop/${slug}`} className={classes.product}>
        <img className={classes.productPhoto} src={src} alt='plant photo' />
        <b className={classes.productTitle}>{title}</b>
        <p className={classes.productSKU}>
          <span className={classes.grayColored}>SKU: </span>
          {SKU}
        </p>
      </Link>
      <div className={classes.price}>
        {`$${fullPrice}.00`}
      </div>
      <div className={classes.quantity}>
        <button
          onClick={handleQuantityDecrement}
          className={`${classes.button} ${classes.minusButton} ${quantity <= 1 ? classes.disabled : ''}`}
        ></button>
        <span className={classes.quantityValue}>{quantity}</span>
        <button
          onClick={handleQuantityIncrement}
          className={`${classes.button} ${classes.plusButton} ${quantity >= inStock ? classes.disabled : ''}`}
        ></button>
      </div>
      <div className={classes.total}>
        {`$${totalPrice}.00`}
      </div>
      <div className={classes.removeButton}>
        <button onClick={handleRemove}><Trash /></button>
      </div>
    </div>
  )
}

export default ProductRow