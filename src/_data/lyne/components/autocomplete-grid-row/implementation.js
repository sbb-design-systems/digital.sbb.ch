const fetchDataExperimental = require('../../../../assets/helpers/fetchHelperExperimental');  

module.exports = async function() {
  const result = await fetchDataExperimental("autocomplete-grid/autocomplete-grid-row");
  return result;
};