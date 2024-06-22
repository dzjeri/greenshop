import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Options from "./components/Options/Options";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import Pagination from "./components/Pagination/Pagination";
import Promo from "./components/Promo/Promo";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import ProductPhotos from "./components/ProductPhotos/ProductPhotos";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import CartTotals from "./components/CartTotals/CartTotals";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import classes from "./App.module.css";

import saleBanner from "./assets/images/sale-banner.png";
// import Product from "./components/Products/Product";

const breadcrumbsLinks = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/shop",
    text: "Shop",
  },
];

const App = () => {
  const [plants, setPlants] = useState([]);
  const [blogposts, setBlogposts] = useState([]);
  console.log(blogposts);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/Korgehah/f8dc7a61bb82eb51428427bcdd666857/raw/84f401829838200ebf08e3794869d4c3a817600a/productCards.json"
      )
      .then(({ data }) => setPlants(data));
    axios
      .get(
        "https://gist.githubusercontent.com/Korgehah/97a70084d5c1566b0349b77663a556b5/raw/3b6ed5e6dc9801cd1cc472b83f6f3a49660b0e3b/blog.json"
      )
      .then(({ data }) => setBlogposts(data));
  }, []);
  console.log(plants, blogposts);

  return (
    <div className={classes.wrapper}>
      <div className={classes.app}>
        <Header />
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
            <Products products={plants} />
            <Pagination numberOfPages={4} />
          </div>
        </div>
        <Promo />
        <Blog posts={blogposts} />
        <Footer />

        <Breadcrumbs links={breadcrumbsLinks} />
        <div className={classes.productView}>
          <ProductPhotos {...plants[0]} />
          <ProductInfo {...plants[0]} />
          <ProductDescription {...plants[0]} />
        </div>
        <RelatedProducts
          title="Related Products"
          products={plants.slice(0, 15)}
        />

        <ShoppingCart products={plants.slice(0, 3)} />
        <CartTotals />

        <CheckoutForm />
        <OrderDetails />
      </div>
    </div>
  );
};

export default App;
