const fetchData = require('../../../../assets/helpers/fetchHelper');  

module.exports = async function() {
  const result = await fetchData("datepicker/datepicker-previous-day");
  return result;
};