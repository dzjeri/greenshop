import { useState } from 'react';
import Cactus1 from '../icons/Cactus1';
import Cactus2 from '../icons/Cactus2';
import Cactus3 from '../icons/Cactus3';
import Logo from '../icons/Logo';
import MapMarker from '../icons/MapMarker';
import RoundedMail from '../icons/RoundedMail';
import Phone from '../icons/Phone';
import FacebookLogo from '../icons/FacebookLogo';
import InstagramLogo from '../icons/InstagramLogo';
import TwitterLogo from '../icons/TwitterLogo';
import LinkedinLogo from '../icons/LinkedinLogo';
import UnionLogo from '../icons/UnionLogo';
import classes from './Footer.module.css';
import paymentOptions from '../../assets/images/payment-options.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className={classes.footer}>
      <div className={classes.about}>
        <div className={classes.aboutBlock}>
          <div><Cactus1 /></div>
          <b>Garden Care</b>
          <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <div className={classes.aboutBlock}>
          <div><Cactus2 /></div>
          <b>Plant Renovation</b>
          <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <div className={classes.aboutBlock}>
          <div><Cactus3 /></div>
          <b>Watering Garden</b>
          <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <form className={classes.joinForm}>
          <b>Would you like to join newsletters?</b>
          <div className={classes.formField}>
            <input
              type="text"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              placeholder="enter your email address..."
            />
            <button>Join</button>
          </div>
          <p>
            We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! 
          </p>
        </form>
      </div>
      <div className={classes.contact}>
        <div className={classes.logoBlock}>
          <Logo />
        </div>
        <div className={classes.addressBlock}>
          <MapMarker />
          <span>
            70 West Buckingham Ave.<br />
            Farmingdale, NY 11735
          </span>
        </div>
        <div className={classes.emailBlock}>
          <RoundedMail />
          <span>contact@greenshop.com</span>
        </div>
        <div className={classes.phoneBlock}>
          <Phone />
          <span>+88 01911 717 490</span>
        </div>
      </div>
      <div className={classes.links}>
        <div className={classes.accountLinks}>
          <h4>My Account</h4>
          <ul>
            <li><a href="">My Account</a></li>
            <li><a href="">Our stores</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">Career</a></li>
            <li><a href="">Specials</a></li>
          </ul>
        </div>
        <div className={classes.helpLinks}>
          <h4>Help & Guide</h4>
          <ul>
            <li><a href="">Help Center</a></li>
            <li><a href="">How to Buy</a></li>
            <li><a href="">Shipping & Delivery</a></li>
            <li><a href="">Product Policy</a></li>
            <li><a href="">How to Return</a></li>
          </ul>
        </div>
        <div className={classes.categoriesLinks}>
          <h4>Categories</h4>
          <ul>
            <li><a href="">House Plants</a></li>
            <li><a href="">Potter Plants</a></li>
            <li><a href="">Seeds</a></li>
            <li><a href="">Small Plants</a></li>
            <li><a href="">Accessories</a></li>
          </ul>
        </div>
        <div className={classes.stackedBlock}>
          <div className={classes.socialLinks}>
            <h4>Social Media</h4>
            <ul>
              <li><a href=""><FacebookLogo /></a></li>
              <li><a href=""><InstagramLogo /></a></li>
              <li><a href=""><TwitterLogo /></a></li>
              <li><a href=""><LinkedinLogo /></a></li>
              <li><a href=""><UnionLogo /></a></li>
            </ul>
          </div>
          <div className={classes.paymentOptions}>
            <h4>We accept</h4>
            <img src={paymentOptions} alt="Supported cards" />
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        © 2021 GreenShop. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer