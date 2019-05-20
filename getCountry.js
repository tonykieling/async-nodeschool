// const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);

// getCountry = async () => {
//   const response = await axios.get(`https://restcountries.eu/rest/v2/name/brazil`);
//   return response
// }

// console.log(getCountry)
// 'use strict';
const cur = require('./getCurrency.js')
// import { foo, asd } from 'getCurrency.js'
// getCurrency()
//   .then(res => console.log("123: ", res))
// console.log("a: ", cur)

cur()
  .then(r => console.log("r: ",r))