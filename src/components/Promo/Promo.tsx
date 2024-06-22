import classes from "./Promo.module.css";
import { ArrowRight } from "../../icons";

import blushingBromeliadPhoto from "../../assets/images/blushing-bromeliad2.png";
import africanVioletPhoto from "../../assets/images/african-violet.png";

const Promo = () => {
  return (
    <div className={classes.promo}>
      <div className={classes.promoBlock}>
        <div className={classes.photoContainer}>
          <img src={blushingBromeliadPhoto} alt="Blushing Bromeliad" />
        </div>
        <div className={classes.text}>
          <h4>
            Summer Cactus
            <br />& Succulents
          </h4>
          <p>
            We are an online plant shop offering a wide
            <br />
            range of cheap and trendy plants
          </p>
          <button>
            Find More
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className={classes.promoBlock}>
        <div className={classes.photoContainer}>
          <img src={africanVioletPhoto} alt="African Violet" />
        </div>
        <div className={classes.text}>
          <h4>
            Styling Trends
            <br />& Much More
          </h4>
          <p>
            We are and online plant shop offering a wide
            <br />
            range of cheap and trendy plants
          </p>
          <button>
            Find More
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export { Promo };
