const sortDefault = (a, b) => a.id - b.id;

const sortByName = (a, b) => a.title.localeCompare(b.title);

const sortByPriceAsc = (a, b) => a.fullPrice - b.fullPrice;

const sortByPriceDesc = (a, b) => b.fullPrice - a.fullPrice;

export default {
  sortDefault,
  sortByName,
  sortByPriceAsc,
  sortByPriceDesc
}