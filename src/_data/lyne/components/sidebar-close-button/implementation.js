const fetchData = require('../../../../assets/helpers/fetchHelper');  

module.exports = async function() {
  const result = await fetchData("sidebar/sidebar-close-button");
  return result;
};