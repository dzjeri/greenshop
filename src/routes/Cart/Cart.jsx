import axios from 'axios'
import { useState } from 'react'
import { useLoaderData } from "react-router-dom"
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs"
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart"
import CartTotals from "../../components/CartTotals/CartTotals"
import products from '../../data/products.json'
import classes from './Cart.module.css'

const breadcrumbsLinks = [
  {
    href: '/',
    text: 'Home'
  },
  {
    href: '/shop',
    text: 'Shop'
  },
  {
    href: null,
    text: 'Shopping Cart'
  }
]

const loader = async () => {
  // const productsRequest = await axios.get('https://gist.githubusercontent.com/Korgehah/f8dc7a61bb82eb51428427bcdd666857/raw/84f401829838200ebf08e3794869d4c3a817600a/productCards.json')
  // return { products: productsRequest.data };
  return { products };
};

const Cart = () => {
  // const { products } = useLoaderData();
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('greenshopCart')));
  const updateCart = () => {
    const products = JSON.parse(localStorage.getItem('greenshopCart'));
    setProducts(products);
  }

  return (
    <div className={classes.cart}>
      <div className={classes.breadcrumbs}>
        <Breadcrumbs links={breadcrumbsLinks} />
      </div>
      {products.length > 0
        ? (<div className={classes.cartWrapper}>
            <ShoppingCart products={products} updateCart={updateCart} />
            <CartTotals products={products} />
          </div>)
        : <div className={classes.emptyBlock}>The cart is empty</div>
      }
    </div>
  )
}

export default Cart
export { loader }