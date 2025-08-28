const fetchData = require('../../../../assets/helpers/fetchHelper');  

module.exports = async function() {
  const result = await fetchData("checkbox/checkbox-panel");
  return result;
};