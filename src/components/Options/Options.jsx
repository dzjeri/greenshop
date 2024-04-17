import classes from './Options.module.css';

const Options = () => {
  return (
    <div className={classes.options}>
      <div className={classes.productTypes}>
        <button className={classes.activeProductType}>All Plants</button>
        <button>New Arrivals</button>
        <button>Sale</button>
      </div>
      <div>
        <select name="sorting-option">
          <option value="default" disabled>Default sorting</option>
          <option value="name">Name</option>
          <option value="price-ascending">Price (Low To High)</option>
          <option value="price-descending">Price (High To Low)</option>
        </select>
      </div>
    </div>
  )
}

export default Options