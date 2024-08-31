const fetchData = require('../../../../../assets/helpers/fetchHelper');  

module.exports = async function() {
  const result = await fetchData("breadcrumb/breadcrumb-group");
  return result;
};