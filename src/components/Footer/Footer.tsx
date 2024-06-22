import { useState } from "react";
import {
  Cactus1,
  Cactus2,
  Cactus3,
  Logo,
  MapMarker,
  RoundedMail,
  Phone,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  LinkedinLogo,
  UnionLogo,
} from "../../icons";
import classes from "./Footer.module.css";
import paymentOptions from "../../assets/images/payment-options.png";

const accountLinks = [
  {
    text: "My Account",
  },
  {
    text: "Our stores",
  },
  {
    text: "Contact us",
  },
  {
    text: "Career",
  },
  {
    text: "Specials",
  },
];

const helpLinks = [
  {
    text: "Help Center",
  },
  {
    text: "How to Buy",
  },
  {
    text: "Shipping & Delivery",
  },
  {
    text: "Product Policy",
  },
  {
    text: "How to Return",
  },
];

const categoriesLinks = [
  {
    text: "House Plants",
  },
  {
    text: "Potter Plants",
  },
  {
    text: "Seeds",
  },
  {
    text: "Small Plants",
  },
  {
    text: "Accessories",
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className={classes.footer}>
      <div className={classes.about}>
        <div className={classes.aboutBlock}>
          <div className={classes.imageBlock}>
            <Cactus1 />
          </div>
          <b>Garden Care</b>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className={classes.aboutBlock}>
          <div className={classes.imageBlock}>
            <Cactus2 />
          </div>
          <b>Plant Renovation</b>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className={classes.aboutBlock}>
          <div className={classes.imageBlock}>
            <Cactus3 />
          </div>
          <b>Watering Garden</b>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
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
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
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
            70 West Buckingham Ave.
            <br />
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
            {accountLinks.map((link, i) => (
              <li key={i}>
                <a href="">{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.helpLinks}>
          <h4>Help & Guide</h4>
          <ul>
            {helpLinks.map((link, i) => (
              <li key={i}>
                <a href="">{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.categoriesLinks}>
          <h4>Categories</h4>
          <ul>
            {categoriesLinks.map((link, i) => (
              <li key={i}>
                <a href="">{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.stackedBlock}>
          <div className={classes.socialLinks}>
            <h4>Social Media</h4>
            <ul>
              <li>
                <a href="">
                  <FacebookLogo />
                </a>
              </li>
              <li>
                <a href="">
                  <InstagramLogo />
                </a>
              </li>
              <li>
                <a href="">
                  <TwitterLogo />
                </a>
              </li>
              <li>
                <a href="">
                  <LinkedinLogo />
                </a>
              </li>
              <li>
                <a href="">
                  <UnionLogo />
                </a>
              </li>
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
  );
};

export { Footer };
