import { useLoaderData } from 'react-router-dom'
import classes from './Checkout.module.css'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'
import OrderDetails from '../../components/OrderDetails/OrderDetails'
import CartAPI from '../../utils/cart'

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
    text: 'Checkout'
  }
]

// Мб лучше было бы без лоадера?
const loader = async () => {
  const products = CartAPI.getProducts();
  return products;
}

const Checkout = () => {
  const products = useLoaderData();

  return (
    <div className={classes.checkout}>
      <div className={classes.breadcrumbs}>
        <Breadcrumbs links={breadcrumbsLinks} />
      </div>
      {products.length > 0
        ?  (<div className={classes.checkoutWrapper}>
             <CheckoutForm />
             <OrderDetails products={products} />
           </div>)
        :  (<div className={classes.emptyBlock}>The cart is empty</div>)
      }

      
    </div>
  )
}

export default Checkout
export { loader }