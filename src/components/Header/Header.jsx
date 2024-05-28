import { Link, NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import Logo from '../icons/Logo';
import Search from '../icons/Search';
import CartWithCircle from '../icons/CartWithCircle';
import Login from '../icons/Login';

const headerNavLinks = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'Shop',
    href: '/shop'
  },
  {
    text: 'Plant Care',
    href: '/plant-care'
  },
  {
    text: 'Blogs',
    href: '/blogs'
  }
];

const Header = () => {
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
              <NavLink className={({ isActive }) => isActive ? classes.activeLink : ''} to={link.href}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className={classes.userBlock}>
        <Link to="">
          <Search />
        </Link>
        <Link to="/shop/cart">
          <CartWithCircle />
        </Link>
        <button className={classes.loginButton}>
          <Login />
          Login
        </button>
      </div>
    </header>
  )
}

export default Header