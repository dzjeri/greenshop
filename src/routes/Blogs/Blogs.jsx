import { useState, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { Blog } from "../../components/Blog/Blog";
import { Pagination } from "../../components/Pagination/Pagination";
import classes from "./Blogs.module.css";

const loader = async () => {
  const blogsRequest = await axios.get("http://localhost:3001/blogposts");
  return blogsRequest.data;
};

const Blogs = () => {
  const blogsRef = useRef(null);
  const blogs = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  return (
    <div ref={blogsRef} className={classes.blogs}>
      <Blog posts={blogs.slice(firstItemIndex, lastItemIndex)} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsLength={blogs.length}
        itemsPerPage={itemsPerPage}
        scrollRef={blogsRef}
      />
    </div>
  );
};

export { Blogs, loader };
