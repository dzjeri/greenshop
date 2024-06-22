import { useState } from "react";
import classes from "./OrderDetails.module.css";
import { ProductCard } from "./ProductCard";
import formatting from "../../utils/formatting";
import paymentOptions from "../../assets/images/payment-options.png";
import { Product } from "../../types";

type OrderDetailsProps = {
  products: Product[];
  openModal: () => void;
};

const OrderDetails = ({ products, openModal }: OrderDetailsProps) => {
  const [shippingInfoOpen, setShippingInfoOpen] = useState(false);
  const subtotal = products
    .map((p) => p.fullPrice * p.quantity!)
    .reduce((total, cur) => total + cur, 0);
  const discount = 0;
  const shipping = subtotal < 1000 ? Math.floor(subtotal * 0.05) : 0;
  const total = subtotal - discount + shipping;

  const handleShippingInfoClick = () => setShippingInfoOpen(!shippingInfoOpen);

  return (
    <div className={classes.orderDetails}>
      <h3 className={classes.title}>Your Order</h3>
      <div className={classes.header}>
        <span>Products</span>
        <span>Subtotal</span>
      </div>
      <div className={classes.products}>
        <ul>
          {products.map((obj) => (
            <li key={obj.id}>
              <ProductCard {...obj} quantity={obj.quantity} />
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.orderTotalInfo}>
        <p className={classes.couponLink}>
          <span>Have a coupon code? </span>
          <a href="">Click here</a>
        </p>
        <div className={classes.totalInfoRow}>
          <span>Subtotal</span>
          <b>{formatting.formatPrice(subtotal)}</b>
        </div>
        <div className={classes.totalInfoRow}>
          <span>Coupon Discount</span>
          <span>{"(-) " + formatting.formatPrice(discount)}</span>
        </div>
        <div className={classes.totalInfoRow}>
          <span>Shipping</span>
          <b>{formatting.formatPrice(shipping)}</b>
        </div>
        <div
          className={
            shippingInfoOpen
              ? `${classes.shippingInfo} ${classes.open}`
              : classes.shippingInfo
          }
        >
          <button
            onClick={handleShippingInfoClick}
            className={classes.showButton}
            type="button"
          >
            View shipping charge
          </button>
          <p className={classes.shippingText}>
            For orders under $1,000, the shipping cost is 5% of the final price.
            For orders over $1000 shipping is free.
          </p>
        </div>
        <div className={classes.totalRow}>
          <b>Total</b>
          <span className={classes.greenColored}>
            {formatting.formatPrice(total)}
          </span>
        </div>
      </div>
      <div className={classes.paymentMethod}>
        <h3 className={classes.title}>Payment Method</h3>
        <label className={classes.radioButton}>
          <input type="radio" name="payment-method" />
          <img
            className={classes.paymentOptionsImg}
            src={paymentOptions}
            alt="Paypal, MasterCard, Visa, American Express logos"
          />
        </label>
        <label className={classes.radioButton}>
          <input type="radio" name="payment-method" />
          <span>Dorect bank transfer</span>
        </label>
        <label className={classes.radioButton}>
          <input type="radio" name="payment-method" />
          <span>Cash on delivery</span>
        </label>
      </div>
      <div className={classes.orderButton}>
        <button onClick={openModal}>Place Order</button>
      </div>
    </div>
  );
};

export { OrderDetails };
