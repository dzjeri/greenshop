import { useState } from 'react'
import classes from './CartTotals.module.css'
import formatting from '../../utils/formatting'

const CartTotals = ({ products }) => {
  const [shippingInfoOpen, setShippingInfoOpen] = useState(false);
  const subtotal = products
    .map(p => p.fullPrice * p.quantity)
    .reduce((total, cur) => total + cur, 0);
  const discount = 0;
  const shipping = subtotal < 1000
    ? Math.floor(subtotal * 0.05)
    : 0;
  const total = subtotal - discount + shipping;

  const handleShippingInfoClick = () => setShippingInfoOpen(!shippingInfoOpen);

  return (
    <div className={classes.cartTotals}>
      <div className={classes.header}>
        <b className={classes.title}>Cart Totals</b>
      </div>
      <form className={classes.couponForm}>
        <label className={classes.couponLabel} htmlFor='coupon-input'>Coupon Apply</label>
        <div className={classes.couponField}>
          <input className={classes.couponInput} id='coupon-input' placeholder='Enter coupon code here...' type="text" />
          <button className={classes.applyButton} type='button'>Apply</button>
        </div>
      </form>
      <div className={classes.totalInfo}>
        <p className={classes.totalInfoRow}>
          <span>Subtotal</span>
          <b>{formatting.formatPrice(subtotal)}</b>
        </p>
        <p className={classes.totalInfoRow}>
          <span>Coupon Discount</span>
          <span>{'(-) ' + formatting.formatPrice(discount)}</span>
        </p>
        <p className={classes.totalInfoRow}>
          <span>Shipping</span>
          <b>{formatting.formatPrice(shipping)}</b>
        </p>
        <div className={shippingInfoOpen ? `${classes.shippingInfo} ${classes.open}` : classes.shippingInfo}>
          <button onClick={handleShippingInfoClick} className={classes.showButton} type='button'>View shipping charge</button>
          <p className={classes.shippingText}>For orders under $1,000, the shipping cost is 5% of the final price. For orders over $1000 shipping is free.</p>
        </div>
        <p className={classes.totalSumRow}>
          <b>Total</b>
          <span className={classes.greenColored}>{formatting.formatPrice(total)}</span>
        </p>
      </div>
      <div className={classes.cartButtons}>
        <a href="checkout" className={classes.checkoutButton}>Proceed To Checkout</a>
        <a href="/shop" className={classes.shoppingButton}>Continue Shopping</a>
      </div>
    </div>
  )
}

export default CartTotals