import { useState } from "react";
import ReactSlider from "react-slider";
import cn from "classnames";
import classes from "./Filter.module.css";

const CATEGORIES = [
  "House Plants",
  "Potter Plants",
  "Seeds",
  "Small Plants",
  "Big Plants",
  "Succulents",
  "Trerrariums",
  "Gardening",
  "Accessories",
];

const SIZES = ["Small", "Medium", "Large"];

const countByCategory = (products, categoryId) =>
  products.filter((p) => p.categoriesIds.includes(categoryId)).length;
const countBySize = (products, size) =>
  products.filter((p) => p.size === size.toLowerCase()).length;

const Filter = ({
  products,
  onSliderChange,
  onCategoryClick,
  onSizeClick,
  minPrice,
  maxPrice,
  categoryFilter,
  sizeFilter,
  minSliderValue,
  maxSliderValue,
  onPriceFilterClick,
}) => {
  const categoriesFilters = CATEGORIES.map((cat, i) => ({
    name: cat,
    quantity: countByCategory(products, i + 1),
  }));

  const sizeFilters = SIZES.map((s) => ({
    name: s,
    quantity: countBySize(products, s),
  }));

  // TODO: Считать здесь defaultValue для прайс-рэнджа
  // Или как там эта хуйня называется

  return (
    <div className={classes.filter}>
      <div className={classes.categories}>
        <h3>Categories</h3>
        <ul>
          {categoriesFilters.map((cat, i) => (
            <li key={i}>
              <button
                className={cn(classes.filterButton, {
                  [classes.active]: categoryFilter === i + 1,
                })}
                data-category-id={i + 1}
                onClick={onCategoryClick}
              >
                <span>{cat.name}</span>
                <span>{`(${cat.quantity})`}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.priceRange}>
        <h3>Price Range</h3>
        <div className={classes.rangeInput}>
          <ReactSlider
            className={classes.slider}
            thumbClassName={classes.sliderThumb}
            thumbActiveClassName={classes.sliderThumbActive}
            trackClassName={classes.sliderTrack} // doesn't work
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            // set class for styling in module (use :nth-of-type)
            // eslint-disable-next-line react/no-unknown-property
            renderTrack={(props, state) => (
              <div
                class={cn(
                  classes.sliderTrack,
                  `${classes.sliderTrack}-${state.index}`
                )}
                {...props}
              ></div>
            )}
            renderThumb={(props) => <div {...props}></div>}
            min={minSliderValue}
            max={maxSliderValue}
            defaultValue={[minSliderValue, maxSliderValue]}
            minDistance={0}
            onChange={onSliderChange}
          />
        </div>
        <div className={classes.price}>
          Price:{" "}
          <span className={classes.priceValue}>
            ${minPrice} - ${maxPrice}
          </span>
        </div>
        <button onClick={onPriceFilterClick}>Filter</button>
      </div>
      <div className={classes.size}>
        <h3>Size</h3>
        <ul>
          {sizeFilters.map((size, i) => (
            <li key={i}>
              <button
                className={cn(classes.filterButton, {
                  [classes.active]: sizeFilter === size.name.toLowerCase(),
                })}
                data-size={size.name}
                onClick={onSizeClick}
              >
                <span>{size.name}</span>
                <span>{`(${size.quantity})`}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Filter };
