import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import classes from "./Header.module.css";
import { Logo, Search, CartWithCircle, Login, Cart } from "../../icons";
import { CartContext } from "../../contexts/CartContext";

const headerNavLinks = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Shop",
    href: "/shop",
  },
  {
    text: "Plant Care",
    href: "/plant-care",
  },
  {
    text: "Blogs",
    href: "/blogs",
  },
];

const Header = () => {
  const { cart } = useContext(CartContext);
  const productsQuantity = cart.length;
  console.log("in header ", cart);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <div className={classes.mainNav}>
        <ul>
          {headerNavLinks.map((link, i) => (
            <li key={i}>
              <NavLink
                className={({ isActive }) =>
                  cn({ [classes.activeLink]: isActive })
                }
                to={link.href}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className={classes.userBlock}>
        <Link to="" className={classes.searchLink}>
          <Search />
        </Link>
        <Link to="/shop/cart" className={classes.cartLink}>
          {productsQuantity > 0 ? (
            <>
              <span className={classes.productsQuantity}>
                {productsQuantity}
              </span>
              <CartWithCircle />
            </>
          ) : (
            <Cart />
          )}
        </Link>
        <button className={classes.loginButton}>
          <Login />
          Login
        </button>
      </div>
    </header>
  );
};

export { Header };
