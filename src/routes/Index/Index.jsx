import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import Slider from "../../components/Slider/Slider"
import Filter from "../../components/Filter/Filter"
import Options from "../../components/Options/Options"
import Products from "../../components/Products/Products"
import Pagination from "../../components/Pagination/Pagination"
import Promo from '../../components/Promo/Promo'
import Blog from '../../components/Blog/Blog'
import products from '../../data/products.json'
import blogposts from '../../data/blogposts.json'
import saleBanner from '../../assets/images/sale-banner.png'
import classes from './Index.module.css'

const loader = async () => {
  // const productsRequest = await axios.get('https://gist.githubusercontent.com/Korgehah/f8dc7a61bb82eb51428427bcdd666857/raw/84f401829838200ebf08e3794869d4c3a817600a/productCards.json')
  // const blogsRequest = await axios.get('https://gist.githubusercontent.com/Korgehah/97a70084d5c1566b0349b77663a556b5/raw/3b6ed5e6dc9801cd1cc472b83f6f3a49660b0e3b/blog.json')
  // return { products: productsRequest.data, blogposts: blogsRequest.data };

  return { products, blogposts }
};

const Index = () => {
  const { products, blogposts } = useLoaderData();
  const displayedBlogposts = blogposts.slice(0, 4); // only show first 4
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
    <>
      <Slider />
      <div className={classes.shop}>
        <div className={classes.left}>
          <Filter />
          <div className={classes.saleBanner}>
            <img src={saleBanner} alt="Sale Banner" />
          </div>
        </div>
        <div className={classes.right}>
          <Options />
          <Products products={products.slice(firstItemIndex, lastItemIndex)} />
          <Pagination
            itemsLength={itemsLength}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
      <Promo />
      <Blog posts={displayedBlogposts} />
    </>
  )
}

export default Index
export { loader }