import { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { Product } from "../../types";
import { Shop as ShopComponent } from "../../components/Shop/Shop";

const loader = async () => {
  const productsRequest = await axios.get("http://localhost:3001/products");

  // map() для id из-за того, что json-server возвращает id строкой
  // Потом сделаю функцию для фетчинга, где всегда буду кастить к числу
  const products = productsRequest.data.map((p: Product) => ({
    ...p,
    id: Number(p.id),
  }));

  return products;
};

const Shop = () => {
  const products = useLoaderData() as Product[];
  const ref = useRef(null);

  // Норм пропы объединять в объект?
  // Фиксил так ошибку https://stackoverflow.com/a/57312722/23569262
  // Только там Type '{ products: unknown; ref: MutableRefObject<null>; }' is not assignable to type 'IntrinsicAttributes & RefAttributes<HTMLDivElement>'.
  // Property 'products' does not exist on type 'IntrinsicAttributes & RefAttributes<HTMLDivElement>'.
  const ShopProps: { products: Product[]; ref: React.MutableRefObject<null> } =
    {
      products,
      ref,
    };

  return <ShopComponent {...ShopProps} />;
};

export { Shop, loader };
