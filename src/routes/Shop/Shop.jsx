import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import Filter from '../../components/Filter/Filter'
import Options from '../../components/Options/Options'
import Products from '../../components/Products/Products'
import Pagination from '../../components/Pagination/Pagination'
import products from '../../data/products.json'
import saleBanner from '../../assets/images/sale-banner.png'
import classes from './Shop.module.css'

const loader = async () => {
  // const productsRequest = await axios.get('https://gist.githubusercontent.com/Korgehah/f8dc7a61bb82eb51428427bcdd666857/raw/84f401829838200ebf08e3794869d4c3a817600a/productCards.json')
  // return productsRequest.data;
  return products;
}

const Shop = () => {
  const products = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const itemsLength = products.length;
  const lastItemIndex = itemsPerPage * currentPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const totalPages = Math.ceil(itemsLength / itemsPerPage);

  const paginate = (page) => {
    if (page === '>') {
      if (currentPage === totalPages) return;

      setCurrentPage(currentPage + 1);
      return;
    }
    if (page === '<') {
      if (currentPage === 1) return;

      setCurrentPage(currentPage - 1);
      return;
    }

    setCurrentPage(page)
  }

  return (
    <div className={classes.shop}>
      <div className={classes.shopWrapper}>
        <div className={classes.left}>
          <Filter products={products} />
          <div className={classes.saleBanner}>
            <img src={saleBanner} alt="Sale Banner" />
          </div>
        </div>
        <div className={classes.right}>
          <Options />
          <Products products={products.slice(firstItemIndex, lastItemIndex)} />
          <Pagination
            currentPage={currentPage}
            itemsLength={itemsLength}
            itemsPerPage={itemsPerPage}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  )
}

export default Shop
export { loader }