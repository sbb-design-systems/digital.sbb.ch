const fetchData = require('../../../../assets/helpers/fetchHelper');  

module.exports = async function() {
  const result = await fetchData("autocomplete-grid/autocomplete-grid-button");
  return result;
};