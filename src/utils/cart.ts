import { Cart, CartProduct } from "../types";
const CART_NAME = "greenshopCart";

// const exists = (): boolean => {
//   const cart = JSON.parse(localStorage.getItem(CART_NAME));
//   return cart ? true : false;
// };

// Cart with `CART_NAME` exists in localStorage
const exists = (): boolean => Boolean(localStorage.getItem(CART_NAME));

// Cart contains product
const contains = (product: CartProduct): boolean => {
  const cart: CartProduct[] | null = JSON.parse(
    localStorage.getItem(CART_NAME) || "[]"
  );

  if (!cart) return false;

  const found = cart.find((item: CartProduct) => item.id === product.id);
  return found ? true : false;
};

const add = (product: CartProduct, quantity = 1) => {
  product.quantity = quantity;
  if (!exists()) {
    localStorage.setItem(CART_NAME, JSON.stringify([product]));
    return;
  }

  if (contains(product)) {
    return;
  }

  const cart = JSON.parse(localStorage.getItem(CART_NAME) || "[]");
  const updatedCart = [...cart, product];
  localStorage.setItem(CART_NAME, JSON.stringify(updatedCart));
};

const remove = (product: CartProduct) => {
  const cart = JSON.parse(localStorage.getItem(CART_NAME) || "[]");
  const filteredCart = cart.filter(
    (item: CartProduct) => item.id !== product.id
  );
  localStorage.setItem(CART_NAME, JSON.stringify(filteredCart));
};

const increaseQuantity = (product: CartProduct) => {
  // Нужно ли throw error, если нет продакта в корзине? пока что пох
  if (product.quantity + 1 > product.inStock)
    throw new Error("No more product in stock");

  const cart = JSON.parse(localStorage.getItem(CART_NAME) || "[]");
  cart.find((p: CartProduct) => p.id === product.id).quantity++;
  localStorage.setItem(CART_NAME, JSON.stringify(cart));
};

const decreaseQuantity = (product: CartProduct) => {
  if (product.quantity - 1 < 1)
    throw new Error("Can't set products in cart lesser than 1, use remove");

  const cart = JSON.parse(localStorage.getItem(CART_NAME) || "[]");
  cart.find((p: CartProduct) => p.id === product.id).quantity--;
  localStorage.setItem(CART_NAME, JSON.stringify(cart));
};

const getProducts = () => {
  const cart = JSON.parse(localStorage.getItem(CART_NAME) || "[]");
  return cart;
};

const cartContains = (cart: CartProduct[] | null, product: CartProduct) => {
  if (!cart) return false;

  const found = cart.find((item) => item.id === product.id);
  return found ? true : false;
};

export default {
  add,
  remove,
  contains,
  increaseQuantity,
  decreaseQuantity,
  getProducts,
  cartContains,
};
