const axios = require('axios')

// const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);

// this function returns infor about the passed country
module.exports = getCountry = (country, code) => {
console.log("code== ", code, "country+ ", country)
  return new Promise((res, rej) => {
    try {
      f = async () => {

        const countryInfo = await axios.get(`https://restcountries.eu/rest/v2/name/${country}`);
        if (code)
          res(countryInfo.data[0].currencies[0].code)
        // res(countryInfo.data[0])
        res(countryInfo)
      }
      f()
    } catch(err) {
      rej(err.message)
    }
  })
}

// getCountry("spain", "code")
//   .then(console.log)
  // .then(country => console.log(country.data[0].capital))
