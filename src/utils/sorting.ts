import { Product } from "../types";

const sortDefault = (a: Product, b: Product) => a.id - b.id;

const sortByName = (a: Product, b: Product) => a.title.localeCompare(b.title);

const sortByPriceAsc = (a: Product, b: Product) => a.fullPrice - b.fullPrice;

const sortByPriceDesc = (a: Product, b: Product) => b.fullPrice - a.fullPrice;

export default {
  sortDefault,
  sortByName,
  sortByPriceAsc,
  sortByPriceDesc,
};
