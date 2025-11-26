const fetchData = require('../../../../assets/helpers/fetchHelper');  

module.exports = async function() {
  const result = await fetchData("icon-sidebar/icon-sidebar-container");
  return result;
};