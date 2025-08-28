const fetchData = require('../../../../assets/helpers/fetchHelper');  

module.exports = async function() {
  const result = await fetchData("image");
  return result;
};