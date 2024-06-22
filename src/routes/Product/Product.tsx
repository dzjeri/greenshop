import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { ProductPhotos } from "../../components/ProductPhotos/ProductPhotos";
import { ProductInfo } from "../../components/ProductInfo/ProductInfo";
import { ProductDescription } from "../../components/ProductDescription/ProductDescription";
import { RelatedProducts } from "../../components/RelatedProducts/RelatedProducts";
import classes from "./Product.module.css";
import { Product as TProduct, Review, PlantReviews } from "../../types";

const loader = async ({
  request,
  params,
}: {
  request: Request;
  params: { name: string };
}) => {
  const productsRequest = await axios.get("http://localhost:3001/products");
  const reviewsRequest = await axios.get("http://localhost:3001/reviews");
  const foundPlant = productsRequest.data.find(
    (p: TProduct) => p.slug === params.name
  );
  const plant = { ...foundPlant, id: Number(foundPlant.id) };

  const plantReviews = reviewsRequest.data.find(
    (r: PlantReviews) => r.slug === plant.slug
  ).reviews;
  // TODO: Убрать все мапы для айди
  const products = productsRequest.data.map((p: TProduct) => ({
    ...p,
    id: Number(p.id),
  }));
  return { plant, plantReviews, products };
};

const Product = () => {
  const { plant, plantReviews, products } = useLoaderData() as {
    plant: TProduct;
    plantReviews: Review[];
    products: TProduct[];
  };

  const crumbs = [
    {
      href: "/shop",
      text: "Shop",
    },
    {
      href: null,
      text: plant.title,
    },
  ];

  return (
    <div className={classes.product}>
      <div className={classes.breadcrumbs}>
        <Breadcrumbs crumbs={crumbs} />
      </div>
      <div className={classes.productWrapper}>
        <ProductPhotos {...plant} />
        <ProductInfo {...plant} reviews={plantReviews} />
      </div>
      <div className={classes.descriptionWrapper}>
        <ProductDescription {...plant} reviews={plantReviews} />
      </div>
      <RelatedProducts
        title="Related Products"
        products={products.slice(0, 15)}
      />
    </div>
  );
};

export { Product, loader };
