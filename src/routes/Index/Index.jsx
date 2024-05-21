import { useState, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { fetcher } from "../../api/helpers";
import { Slider } from "../../components/Slider/Slider";
import { Promo } from "../../components/Promo/Promo";
import { Blog } from "../../components/Blog/Blog";
import { Shop } from "../../components/Shop/Shop";
import classes from "./Index.module.css";

const loader = async () => {
  const productsRequest = await axios.get("http://localhost:3001/products");
  const blogsRequest = await axios.get("http://localhost:3001/blogposts");
  // console.log(await fetcher("blogposts"));

  // map() для id из-за того, что json-server возвращает id строкой
  const products = productsRequest.data.map((p) => ({
    ...p,
    id: Number(p.id),
  }));
  const blogposts = blogsRequest.data.map((b) => ({
    ...b,
    id: Number(b.id),
  }));

  return { products, blogposts };
};

const Index = () => {
  const shopRef = useRef(null);
  const { products, blogposts } = useLoaderData();
  const displayedBlogposts = blogposts.slice(0, 4); // only show first 4

  return (
    <>
      <Slider shopRef={shopRef} />
      <Shop ref={shopRef} products={products} />
      <Promo />
      <Blog posts={displayedBlogposts} />
    </>
  );
};

export { Index, loader };
