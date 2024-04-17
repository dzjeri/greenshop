import { useState } from 'react';
import ReactSlider from 'react-slider';
import classes from './Filter.module.css';

const categoriesFilters = [
  {
    name: 'House Plants',
    amount: 33
  },
  {
    name: 'Potter Plants',
    amount: 12
  },
  {
    name: 'Seeds',
    amount: 65
  },
  {
    name: 'Small Plants',
    amount: 39
  },
  {
    name: 'Big Plants',
    amount: 23
  },
  {
    name: 'Succulents',
    amount: 17
  },
  {
    name: 'Trerrariums',
    amount: 19
  },
  {
    name: 'Gardening',
    amount: 13
  },
  {
    name: 'Accessories',
    amount: 18
  }
];

const sizeFilters = [
  {
    name: 'Small',
    amount: 119
  },
  {
    name: 'Medium',
    amount: 86
  },
  {
    name: 'Large',
    amount: 78
  }
];

const Filter = ({ products }) => {
  const minSliderValue = 0;
  const maxSliderValue = 1200;
  const [minPrice, setMinPrice] = useState(minSliderValue);
  const [maxPrice, setMaxPrice] = useState(maxSliderValue);

  const handleSliderChange = ([min, max]) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  console.log(products.filter(p => p.categoriesIds.includes(1)))

  return (
    <div className={classes.filter}>
      <div className={classes.categories}>
        <h3>Categories</h3>
        <ul>
          {categoriesFilters.map((cat, i) => (
            <li key={i}>
              <a className={i === 0 ? classes.active : ''} href="">
                <span>{cat.name}</span>
                <span>{`(${cat.amount})`}</span>
              </a>
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
            ariaValuetext={state => `Thumb value ${state.valueNow}`}
            ariaLabel={['Lower thumb', 'Upper thumb']}
            // set class for styling in module (use :nth-of-type)
            // eslint-disable-next-line react/no-unknown-property
            renderTrack={(props, state) => <div class={classes.sliderTrack + ' ' +  classes.sliderTrack + '-' + state.index} {...props}></div>}
            renderThumb={(props) => <div {...props}></div>}
            min={minSliderValue}
            max={maxSliderValue}
            defaultValue={[minSliderValue, maxSliderValue]}
            minDistance={0}
            onChange={handleSliderChange}
          />
        </div>
        <div className={classes.price}>
          Price: <span className={classes.priceValue}>${minPrice} - ${maxPrice}</span>
        </div>
        <button>Filter</button>
      </div>
      <div className={classes.size}>
        <h3>Size</h3>
        <ul>
          {sizeFilters.map((size, i) => (
            <li key={i}>
              <a href="">
                <span>{size.name}</span>
                <span>{`(${size.amount})`}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Filter