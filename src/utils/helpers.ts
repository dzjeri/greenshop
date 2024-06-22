import { Product } from "../types";

const getMinPrice = (products: Product[]) =>
  products.reduce(
    (min, prod) => (prod.fullPrice < min ? prod.fullPrice : min),
    10000
  );
const getMaxPrice = (products: Product[]) =>
  products.reduce(
    (max, prod) => (prod.fullPrice > max ? prod.fullPrice : max),
    0
  );

export { getMinPrice, getMaxPrice };
