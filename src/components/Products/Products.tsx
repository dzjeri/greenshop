import { Product } from "./Product";
import { Product as TProduct } from "../../types";
import classes from "./Products.module.css";

type ProductsProps = {
  products: TProduct[];
};

const Products = ({ products }: ProductsProps) => {
  return (
    <div className={classes.products}>
      {products.map((p) => (
        <Product key={p.id} {...p} />
      ))}
    </div>
  );
};

export { Products };
