const fetchData = require('../../../../../assets/helpers/fetchHelper');  

module.exports = async function() {
  const result = await fetchData("navigation/navigation-link");
  return result;
};