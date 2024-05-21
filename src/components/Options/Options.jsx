import classes from './Options.module.css';

const Options = ({
  plantsType, sortingType,
  onPlantTypeClick, onSortingTypeChange
}) => {

  return (
    <div className={classes.options}>
      <div className={classes.productTypes}>
        <button
          className={plantsType === 'all' ? classes.active : ''}
          data-plants-type='all'
          onClick={onPlantTypeClick}
        >All Plants</button>
        <button
          className={plantsType === 'new' ? classes.active : ''}
          data-plants-type='new'
          onClick={onPlantTypeClick}
        >New Arrivals</button>
        <button
          className={plantsType === 'sale' ? classes.active : ''}
          data-plants-type='sale'
          onClick={onPlantTypeClick}
        >Sale</button>
      </div>
      <div className={classes.sortingType}>
        <label>
          <span>Sort by: </span>
          <select name="sorting-option" onChange={onSortingTypeChange}>
            <option value="default">Default sorting</option>
            <option value="name">Name</option>
            <option value="price-ascending">Price (Low To High)</option>
            <option value="price-descending">Price (High To Low)</option>
          </select>
        </label>
      </div>
    </div>
  )
}

export { Options }