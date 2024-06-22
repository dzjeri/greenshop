import { createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/Root/Root";
import { Index, loader as indexLoader } from "./routes/Index/Index";
import { Shop, loader as shopLoader } from "./routes/Shop/Shop";
import { Product, loader as productLoader } from "./routes/Product/Product";
import { Cart, loader as cartLoader } from "./routes/Cart/Cart";
import { Checkout, loader as checkoutLoader } from "./routes/Checkout/Checkout";
import { Blogs, loader as blogsLoader } from "./routes/Blogs/Blogs";
import { Blogpost, loader as blogpostLoader } from "./routes/Blogpost/Blogpost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: indexLoader,
      },
      {
        path: "shop/",
        element: <Shop />,
        loader: shopLoader,
      },
      {
        path: "shop/:name",
        element: <Product />,
        loader: productLoader,
      },
      {
        path: "shop/cart/",
        element: <Cart />,
        loader: cartLoader,
      },
      {
        path: "shop/checkout/",
        element: <Checkout />,
        loader: checkoutLoader,
      },
      {
        path: "blogs/",
        element: <Blogs />,
        loader: blogsLoader,
      },
      {
        path: "blogs/:name",
        element: <Blogpost />,
        loader: blogpostLoader,
      },
    ],
  },
]);

export { router };
