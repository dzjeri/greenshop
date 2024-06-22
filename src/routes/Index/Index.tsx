import { useState, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
// @ts-ignore
import { fetcher } from "../../api/helpers";
import { Slider } from "../../components/Slider/Slider";
import { Promo } from "../../components/Promo/Promo";
import { Blog } from "../../components/Blog/Blog";
import { Shop } from "../../components/Shop/Shop";
import { Product, BlogPost } from "../../types";
import classes from "./Index.module.css";

const loader = async () => {
  const productsRequest = await axios.get("http://localhost:3001/products");
  const blogsRequest = await axios.get("http://localhost:3001/blogposts");
  // console.log(await fetcher("blogposts"));

  // map() для id из-за того, что json-server возвращает id строкой
  const products = productsRequest.data.map((p: Product) => ({
    ...p,
    id: Number(p.id),
  }));
  const blogposts = blogsRequest.data.map((b: BlogPost) => ({
    ...b,
    id: Number(b.id),
  }));

  return { products, blogposts };
};

const Index = () => {
  const shopRef = useRef(null);
  const { products, blogposts } = useLoaderData() as {
    // Нормально ли ебашить as?
    products: Product[];
    blogposts: BlogPost[];
  };
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
