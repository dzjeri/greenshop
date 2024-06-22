export type Product = {
  id: number;
  title: string;
  fullPrice: number;
  discountPrice?: number;
  categoriesIds: number[];
  src: string; // mb url?
  slug: string;
  tag?: string[];
  size: "small" | "medium" | "large";
  inStock: number;
  SKU: string;
  gallery: string[];
  description: string;
  quantity?: number;
};

// Продукт в корзине без categoriesIds, gallery и description, но с quantity
export type CartProduct = Omit<
  Product & { quantity: number },
  "categoriesIds" | "gallery" | "description"
>;

export type Cart = {
  cart: CartProduct[];
};

export type BlogPost = {
  id: number;
  title: string;
  description: string;
  date: string;
  src: string;
  slug: string;
};

export type Review = {
  id: number;
  author: string;
  review: string;
  mark: 1 | 2 | 3 | 4 | 5;
  date: string;
};

export type PlantReviews = {
  id: string;
  slug: string;
  reviews: Review[];
};
