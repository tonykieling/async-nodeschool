// const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);

// getCountry = async () => {
//   const response = await axios.get(`https://restcountries.eu/rest/v2/name/brazil`);
//   return response
// }

const cur = require('./getCurrency.js')

cur()
  .then(r => console.log("r: ",r))