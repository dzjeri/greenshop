import ProductRow from './ProductRow';
import classes from './ShoppingCart.module.css';

const ShoppingCart = ({ products, updateCart }) => {
  return (
    <div className={classes.shoppingCart}>
      <div className={classes.header}>
        <b>Products</b>
        <b>Price</b>
        <b>Quantity</b>
        <b>Total</b>
      </div>
      <ul className={classes.products}>
        {products.map(p => (
          <li key={p.id}>
            <ProductRow {...p} updateCart={updateCart} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingCart