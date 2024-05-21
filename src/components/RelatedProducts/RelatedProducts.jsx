import { useState } from "react";
import cn from "classnames";
import { Product } from "../Products/Product";
import classes from "./RelatedProducts.module.css";

const RelatedProducts = ({ title, products }) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const productsOnSlide = 5;
  const numberOfSlides = Math.ceil(products.length / productsOnSlide);
  // Чтобы промапить кнопки. Мб это запихнуть в стейт, чтобы не считалось каждый ре-рендер?
  const slidesNumbers = Array.from(Array(numberOfSlides)).map((_, i) => i + 1);

  const handleSliderButtonClick = (e) => {
    const slideId = Number(e.currentTarget.dataset.slideId);
    setActiveSlide(slideId);
  };

  return (
    <div className={classes.relatedProducts}>
      <div className={classes.header}>
        <h3 className={classes.title}>{title}</h3>
      </div>
      <div className={classes.productContainer}>
        <ul
          className={classes.productsList}
          style={{
            left: (activeSlide - 1) * -1200 + "px",
          }}
        >
          {products?.map((p) => (
            <li key={p.id}>
              <Product {...p} />
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.sliderButtons}>
        <ul>
          {slidesNumbers.map((n) => (
            <li key={n}>
              <button
                className={cn({ [classes.active]: activeSlide === n })}
                data-slide-id={n}
                onClick={handleSliderButtonClick}
              ></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { RelatedProducts };
