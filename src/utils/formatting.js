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

const _getMonthName = (monthNum) => {
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec'
  ];
  return monthNames[monthNum];
}

// new Date() -> 24 Apr, 2024
const formatDate = (date) => {
  return date.getDate() + ' ' + _getMonthName(date.getMonth()) + ', ' + date.getFullYear();
};

const shortenText = (text) => {
  const slice = text.slice(0, 60).trim();
  return slice < text ? slice + '...' : text;
}

export default {
  formatPrice,
  splitSlug,
  capitalizeString,
  formatDate,
  shortenText
}