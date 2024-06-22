import { useState } from "react";
import { createPortal } from "react-dom";
import { useLoaderData } from "react-router-dom";
import classes from "./Checkout.module.css";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { CheckoutForm } from "../../components/CheckoutForm/CheckoutForm";
import { OrderDetails } from "../../components/OrderDetails/OrderDetails";
import { CheckoutModal } from "../../components/CheckoutModal/CheckoutModal";
import CartAPI from "../../utils/cart";
import { Product } from "../../types";

const crumbs = [
  {
    href: "/shop",
    text: "Shop",
  },
  {
    href: null,
    text: "Checkout",
  },
];

// Мб лучше было бы без лоадера?
const loader = async () => {
  const products = CartAPI.getProducts();
  return products;
};

const Checkout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const products = useLoaderData() as Product[];

  const orderInfo = {
    orderNumber: 1337,
    date: "15 Sep, 2021",
    total: "2,699.00",
    paymentMethod: "Cash on delivery",
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={classes.checkout}>
      <div className={classes.breadcrumbs}>
        <Breadcrumbs crumbs={crumbs} />
      </div>
      {products.length > 0 ? (
        <div className={classes.checkoutWrapper}>
          <CheckoutForm />
          <OrderDetails products={products} openModal={openModal} />
        </div>
      ) : (
        <div className={classes.emptyBlock}>The cart is empty</div>
      )}

      {createPortal(
        <CheckoutModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          orderInfo={orderInfo}
          products={products}
        />,
        document.getElementById("checkout-modal")!
      )}
    </div>
  );
};

export { Checkout, loader };
