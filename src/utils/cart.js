const CART_NAME = 'greenshopCart';

// Cart with `CART_NAME` exists in localStorage
const exists = () => {
  const cart = JSON.parse(localStorage.getItem(CART_NAME));
  return cart ? true : false;
}

// Cart contains product
const contains = (product) => {
  const cart = JSON.parse(localStorage.getItem(CART_NAME));
  if (!cart) return false;

  const found = cart.find(item => item.id === product.id);
  return found ? true : false;
};

const add = (product, quantity = 1) => {
  console.log(product)
  product.quantity = quantity;
  if (!exists()) {
    localStorage.setItem(CART_NAME, JSON.stringify([product]));
    return;
  }

  if (contains(product)) {
    return;
  }

  const cart = JSON.parse(localStorage.getItem(CART_NAME));
  const updatedCart = [...cart, product];
  localStorage.setItem(CART_NAME, JSON.stringify(updatedCart));
};

const remove = (product) => {
  const cart = JSON.parse(localStorage.getItem(CART_NAME));
  const filteredCart = cart.filter(item => item.id !== product.id);
  localStorage.setItem(CART_NAME, JSON.stringify(filteredCart));
};


const increaseQuantity = (product) => {
  // Нужно ли throw error, если нет продакта в корзине? пока что пох
  if (product.quantity + 1 > product.inStock) throw new Error('No more product in stock')

  const cart = JSON.parse(localStorage.getItem(CART_NAME));
  cart.find(p => p.id === product.id).quantity++;
  localStorage.setItem(CART_NAME, JSON.stringify(cart));
};

const decreaseQuantity = (product) => {
  if (product.quantity - 1 < 1) throw new Error('Can\'t set products in cart lesser than 1, use remove');

  const cart = JSON.parse(localStorage.getItem(CART_NAME));
  cart.find(p => p.id === product.id).quantity--;
  localStorage.setItem(CART_NAME, JSON.stringify(cart));
};

const getProducts = () => {
  const cart = JSON.parse(localStorage.getItem(CART_NAME));
  return cart;
};

export default {
  add,
  remove,
  contains,
  increaseQuantity,
  decreaseQuantity,
  getProducts
}