import { Link } from 'react-router-dom';
import classes from './OrderDetails.module.css'
import formatting from '../../utils/formatting';

const ProductCard = ({ SKU, fullPrice, src, title, quantity, slug }) => {
  const total = fullPrice * quantity;

  return (
    <div className={classes.productCard}>
      <Link to={`/shop/${slug}`} className={classes.product}>
        <div className={classes.productPhotoWrapper}>
          <img className={classes.productPhoto} src={src} alt='Product photo' />
        </div>
        <b className={classes.productTitle}>{title}</b>
        <p className={classes.productSKU}>
          <span className={classes.grayColored}>SKU: </span>
          {SKU}
        </p>
      </Link>
      <div className={classes.quantity}>
        {'(x ' + quantity + ')'}
      </div>
      <div className={classes.total}>
        {formatting.formatPrice(total)}
      </div>
    </div>
  )
}

export default ProductCard