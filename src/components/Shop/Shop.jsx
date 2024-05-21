import { useState, forwardRef } from "react";
import classes from "./Shop.module.css";
import { getMinPrice, getMaxPrice } from "../../utils/helpers";
import { Filter } from "../Filter/Filter";
import { Options } from "../Options/Options";
import { Pagination } from "../Pagination/Pagination";
import { Products } from "../Products/Products";
import sorting from "../../utils/sorting";
import saleBanner from "../../assets/images/sale-banner.png";

const Shop = forwardRef(function Shop(props, ref) {
  const { products } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const lastItemIndex = itemsPerPage * currentPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  const minSliderValue = getMinPrice(products);
  const maxSliderValue = getMaxPrice(products);
  const [minPrice, setMinPrice] = useState(minSliderValue);
  const [maxPrice, setMaxPrice] = useState(maxSliderValue);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [sizeFilter, setSizeFilter] = useState(null);
  const [plantsType, setPlantsType] = useState("all");
  const [sortingType, setSortingType] = useState("default");
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const handleSliderChange = ([min, max]) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const handleCategoryClick = (e) => {
    setCurrentPage(1);
    const clickedCategory = Number(e.currentTarget.dataset.categoryId);

    if (categoryFilter !== clickedCategory) setCategoryFilter(clickedCategory);
    else setCategoryFilter(null);
  };

  const handleSizeClick = (e) => {
    setCurrentPage(1);
    const clickedSize = e.currentTarget.dataset.size.toLowerCase();

    if (sizeFilter !== clickedSize) setSizeFilter(clickedSize);
    else setSizeFilter(null);
  };

  const handlePriceFilterClick = () => {
    setCurrentPage(1);
    setPriceRange([minPrice, maxPrice]);
  };

  const handlePlantTypeClick = (e) => {
    setCurrentPage(1);
    setPlantsType(e.currentTarget.dataset.plantsType);
  };

  const handleSortingTypeChange = (e) => setSortingType(e.target.value);

  const typeFiltered = products.filter((p) =>
    plantsType === "all" ? p : p.tag?.includes(plantsType)
  );
  const priceFiltered = typeFiltered.filter(
    (p) => priceRange[0] <= p.fullPrice && p.fullPrice <= priceRange[1]
  );
  const categoryFiltered = priceFiltered.filter((p) =>
    categoryFilter ? p.categoriesIds.includes(categoryFilter) : p
  );
  const sizeFiltered = categoryFiltered.filter((p) =>
    sizeFilter ? p.size === sizeFilter : p
  );
  const filteredAndSorted = [...sizeFiltered].sort((a, b) => {
    if (sortingType === "default") return sorting.sortDefault(a, b);
    else if (sortingType === "name") return sorting.sortByName(a, b);
    else if (sortingType === "price-ascending")
      return sorting.sortByPriceAsc(a, b);
    else if (sortingType === "price-descending")
      return sorting.sortByPriceDesc(a, b);
  });
  // console.log(filteredAndSorted);
  // console.log(filteredAndSorted.length);

  return (
    <div ref={ref} className={classes.shop}>
      <div className={classes.shopWrapper}>
        <div className={classes.left}>
          <Filter
            products={priceFiltered}
            onSliderChange={handleSliderChange}
            onCategoryClick={handleCategoryClick}
            onSizeClick={handleSizeClick}
            minSliderValue={minSliderValue}
            maxSliderValue={maxSliderValue}
            minPrice={minPrice}
            maxPrice={maxPrice}
            categoryFilter={categoryFilter}
            sizeFilter={sizeFilter}
            onPriceFilterClick={handlePriceFilterClick}
          />
          <div className={classes.saleBanner}>
            <img src={saleBanner} alt="Sale Banner" />
          </div>
        </div>
        <div className={classes.right}>
          <Options
            plantsType={plantsType}
            sortingType={sortingType}
            onPlantTypeClick={handlePlantTypeClick}
            onSortingTypeChange={handleSortingTypeChange}
          />
          <Products
            products={filteredAndSorted.slice(firstItemIndex, lastItemIndex)}
          />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsLength={filteredAndSorted.length}
            itemsPerPage={itemsPerPage}
            scrollRef={ref}
          />
        </div>
      </div>
    </div>
  );
});

export { Shop };
