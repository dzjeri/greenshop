import Product from '../Products/Product';
import classes from './RelatedProducts.module.css';

const RelatedProducts = ({ title, products }) => {
  return (
    <div className={classes.relatedProducts}>
      <div className={classes.header}>
        <h3 className={classes.title}>{title}</h3>
      </div>
      <ul className={classes.productsList}>
        {products.map(p => (
          <li key={p.id}>
            <Product {...p} />
          </li>
        ))}
      </ul>
      <div className={classes.sliderButtons}>
        <ul>
          <li><button></button></li>
          <li><button className={classes.active}></button></li>
          <li><button></button></li>
        </ul>
      </div>
    </div>
  )
}

export default RelatedProducts