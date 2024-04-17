import classes from './Products.module.css';
import Product from './Product';

const Products = ({ products }) => {
  return (
    <div className={classes.products}>
      {products.map(p =>( <Product key={p.id} {...p} />))}
    </div>
  )
}

export default Products