import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import Blog from '../../components/Blog/Blog';
import Pagination from '../../components/Pagination/Pagination';
import blogposts from '../../data/blogposts.json'
import classes from './Blogs.module.css'

const loader = async () => {
  // const blogsRequest = await axios.get('https://gist.githubusercontent.com/Korgehah/97a70084d5c1566b0349b77663a556b5/raw/3b6ed5e6dc9801cd1cc472b83f6f3a49660b0e3b/blog.json')
  // return blogsRequest.data;
  return blogposts;
};

const Blogs = () => {
  const blogs = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsLength = blogs.length;
  const itemsPerPage = 8;
  const totalPages = Math.ceil(itemsLength / itemsPerPage);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

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
    <div>
      <Blog posts={blogs.slice(firstItemIndex, lastItemIndex)} />
      <Pagination
        currentPage={currentPage}
        itemsLength={itemsLength}
        itemsPerPage={itemsPerPage}
        paginate={paginate}
      />
    </div>
  )
}

export default Blogs
export { loader }