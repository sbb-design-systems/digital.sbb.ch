const fetchData = require('../../../../assets/helpers/fetchHelper');  

module.exports = async function() {
  const result = await fetchData("teaser-product/teaser-product-static");
  return result;
};