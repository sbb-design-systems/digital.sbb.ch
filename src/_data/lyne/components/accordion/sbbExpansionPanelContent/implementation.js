const fetchData = require('../../../../../assets/helpers/fetchHelper');  

module.exports = async function() {
  const result = await fetchData("expansion-panel/expansion-panel-content");
  return result;
};