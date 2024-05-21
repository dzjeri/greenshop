import { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { Shop as ShopComponent } from "../../components/Shop/Shop";

const loader = async () => {
  const productsRequest = await axios.get("http://localhost:3001/products");

  // map() для id из-за того, что json-server возвращает id строкой
  // Потом сделаю функцию для фетчинга, где всегда буду кастить к числу
  const products = productsRequest.data.map((p) => ({
    ...p,
    id: Number(p.id),
  }));

  return products;
};

const Shop = () => {
  const products = useLoaderData();
  const ref = useRef(null);

  return <ShopComponent products={products} ref={ref} />;
};

export { Shop, loader };
