const fetchData = require('../../../../assets/helpers/fetchHelper');  

module.exports = async function() {
  const result = await fetchData("file-selector/file-selector-dropzone");
  return result;
};