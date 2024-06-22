import { useState } from "react";
import { Link } from "react-router-dom";
import { ThankYou, CloseCheckout } from "../../icons";
import formatting from "../../utils/formatting";
import { Product } from "../../types";
import classes from "./CheckoutModal.module.css";

type CheckoutModalProps = {
  products: Product[];
  isOpen: boolean;
  closeModal: () => void;
  orderInfo: {
    orderNumber: number;
    date: string;
    total: string;
    paymentMethod: string;
  };
};

const CheckoutModal = ({
  orderInfo,
  products,
  isOpen,
  closeModal,
}: CheckoutModalProps) => {
  const subtotal = products.reduce(
    (sum, cur) => sum + cur.quantity! * cur.fullPrice,
    0
  );
  const discount = 0;
  const shipping = subtotal < 1000 ? Math.floor(subtotal * 0.05) : 0;
  const total = subtotal + shipping - discount;
  const todayDate = new Date();

  if (isOpen)
    return (
      <div className={classes.checkoutModal}>
        <div onClick={closeModal} className={classes.overlay} />
        <div className={classes.content}>
          <div className={classes.header}>
            <div className={classes.thankYouIcon}>
              <ThankYou />
            </div>
            <p className={classes.headerText}>Your order has been received</p>
            <button className={classes.closeButton} onClick={closeModal}>
              <CloseCheckout />
            </button>
          </div>
          <div className={classes.body}>
            <ul className={classes.orderInfo}>
              <li>
                <div className={classes.orderInfoColumn}>
                  <span>Order Number</span>
                  <b>{orderInfo.orderNumber}</b>
                </div>
              </li>
              <li>
                <div className={classes.orderInfoColumn}>
                  <span>Date</span>
                  <b>{formatting.formatDate(todayDate)}</b>
                </div>
              </li>
              <li>
                <div className={classes.orderInfoColumn}>
                  <span>Total</span>
                  {/* Remove dollar sign */}
                  <b>{formatting.formatPrice(total).slice(1)}</b>
                </div>
              </li>
              <li>
                <div className={classes.orderInfoColumn}>
                  <span>Payment Method</span>
                  <b>{orderInfo.paymentMethod}</b>
                </div>
              </li>
            </ul>
            <div className={classes.orderDetails}>
              <h4 className={classes.title}>Order Details</h4>
              <div className={classes.orderDetailsHeader}>
                <span>Products</span>
                <span>Qty</span>
                <span>Subtotal</span>
              </div>
              <ul className={classes.products}>
                {products.map((p) => (
                  <li key={p.id}>
                    <div className={classes.productCard}>
                      <Link className={classes.product} to={`/shop/${p.slug}`}>
                        <div className={classes.productPhotoWrapper}>
                          <img
                            className={classes.productPhoto}
                            src={p.src}
                            alt="Product Photo"
                          />
                        </div>
                        <b className={classes.productTitle}>{p.title}</b>
                        <p className={classes.productSKU}>
                          <span className={classes.grayColored}>SKU: </span>
                          {p.SKU}
                        </p>
                      </Link>
                      <div className={classes.quantity}>
                        {"(x " + p.quantity + ")"}
                      </div>
                      <div className={classes.subtotal}>
                        {formatting.formatPrice(p.quantity! * p.fullPrice)}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className={classes.orderTotal}>
                <div className={classes.orderTotalRow}>
                  <span>Shipping</span>
                  <b>{formatting.formatPrice(shipping)}</b>
                </div>
                <div className={classes.orderTotalRow}>
                  <b>Total</b>
                  <span className={classes.greenColored}>
                    {formatting.formatPrice(total)}
                  </span>
                </div>
              </div>
            </div>
            <div className={classes.footer}>
              <p className={classes.orderStatus}>
                Your order is currently being processed. You will receive an
                order confirmation email shortly with the expected delivery date
                for your items.
              </p>
              <button onClick={closeModal} className={classes.trackButton}>
                Track your order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  else return null;
};

export { CheckoutModal };
