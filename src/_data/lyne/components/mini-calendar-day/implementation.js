const fetchData = require('../../../../assets/helpers/fetchHelper');  

module.exports = async function() {
  const result = await fetchData("mini-calendar/mini-calendar-day");
  return result;
};