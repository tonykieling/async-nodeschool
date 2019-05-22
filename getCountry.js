const axios = require('axios')

// const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);

// this function returns infor about the passed country
module.exports = getCountry = (country, code) => {
  return new Promise((res, rej) => {
    try {
      f = async () => {

        const countryInfo = await axios.get(`https://restcountries.eu/rest/v2/name/${country}`);
        if (code)
          res(countryInfo.data[0])
        // here, it's possible to define other flags to return only that data, such as capital, language, and so on
        res(countryInfo.data[0])
      }
      f()
    } catch(err) {
      rej(err.message)
    }
  })
}

getCountry("italy", "code")
  .then(console.log)
  // .then(country => console.log(country.data[0].capital))
