import { useState } from "react";
import cn from "classnames";
import { Product } from "../Products/Product";
import { Product as TProduct } from "../../types";
import classes from "./RelatedProducts.module.css";

type RelatedProductProps = {
  title: string;
  products: TProduct[];
};

const RelatedProducts = ({ title, products }: RelatedProductProps) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const productsOnSlide = 5;
  const numberOfSlides = Math.ceil(products.length / productsOnSlide);
  const slidesNumbers = Array.from(Array(numberOfSlides)).map((_, i) => i + 1);

  const handleSliderButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
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
