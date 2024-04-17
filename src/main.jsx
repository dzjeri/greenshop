import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Root from './routes/Root/Root'
import Index, {
  loader as indexLoader
} from './routes/Index/Index'
import Shop, {
  loader as shopLoader
} from './routes/Shop/Shop'
import Product, {
  loader as productLoader
} from './routes/Product/Product'
import Cart, {
  loader as cartLoader
} from './routes/Cart/Cart'
import Checkout, {
  loader as checkoutLoader
} from './routes/Checkout/Checkout'
import Blogs, {
  loader as blogsLoader
} from './routes/Blogs/Blogs'
import Blogpost, {
  loader as blogpostLoader
} from './routes/Blogpost/Blogpost'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: indexLoader
      },
      {
        path: 'shop/',
        element: <Shop />,
        loader: shopLoader
      },
      {
        path: 'shop/:name',
        element: <Product />,
        loader: productLoader
      },
      {
        path: 'shop/cart/',
        element: <Cart />,
        loader: cartLoader
      },
      {
        path: 'shop/checkout/',
        element: <Checkout />,
        loader: checkoutLoader
      },
      {
        path: 'blogs/',
        element: <Blogs />,
        loader: blogsLoader
      },
      {
        path: 'blogs/:name',
        element: <Blogpost />,
        loader: blogpostLoader
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
