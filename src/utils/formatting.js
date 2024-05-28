// 1234567 -> $1,234,567.00
const formatPrice = (price) => price.toLocaleString(
  'en-US',
  { style: 'currency', currency: 'USD', minimimFractionDigits: 2 }
);

// 'barberton-daisy' -> 'barberton daisy'
const splitSlug = (slug) => slug.split('-').join(' ');

// 'barberton daisy' -> 'Barberton Daisy'
const capitalizeString = (str) => str
  .split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(' ');

export default {
  formatPrice,
  splitSlug,
  capitalizeString
}