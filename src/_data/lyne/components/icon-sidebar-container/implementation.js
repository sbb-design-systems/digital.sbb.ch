const fetchData = require('../../../../assets/helpers/fetchHelper');  

module.exports = async function() {
  const result = await fetchData("sidebar/icon-sidebar-container");
  return result;
};