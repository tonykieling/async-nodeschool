const axios = require('axios')

// const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);

// this function returns infor about the passed country
module.exports = getCountry = (country) => {
  return new Promise((res, rej) => {
    try {
      const countryInfo = axios.get(`https://restcountries.eu/rest/v2/name/${country}`);
      res(countryInfo)
    } catch(err) {
      rej(err.message)
    }
  })
}

// getCountry("spain")
//   .then(country => console.log(country.data[0].capital))
