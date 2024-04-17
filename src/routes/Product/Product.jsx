import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import ProductPhotos from '../../components/ProductPhotos/ProductPhotos'
import ProductInfo from '../../components/ProductInfo/ProductInfo'
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import products from '../../data/products.json'
import reviews from '../../data/reviews.json'
import classes from './Product.module.css'

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
    text: 'Plant Name'
  }
]

const loader = async ({ request, params }) => {
  // const productsRequest = await axios.get('https://gist.githubusercontent.com/Korgehah/f8dc7a61bb82eb51428427bcdd666857/raw/84f401829838200ebf08e3794869d4c3a817600a/productCards.json')
  // const plant = productsRequest.data.find(p => p.slug === params.name);
  // return plant;

  const plant = products.find(p => p.slug === params.name);
  const plantReviews = reviews.find(p => p.slug === params.name)?.reviews;
  return { plant, plantReviews };
}

const Product = () => {
  const { plant, plantReviews } = useLoaderData();

  return (
    <div className={classes.product}>
      <div className={classes.breadcrumbs}>
        <Breadcrumbs links={breadcrumbsLinks} />
      </div>
      <div className={classes.productWrapper}>
        <ProductPhotos {...plant} />
        <ProductInfo {...plant} reviews={plantReviews} />
      </div>
      <ProductDescription {...plant} reviews={plantReviews} />
    </div>
  )
}

export default Product
export { loader }