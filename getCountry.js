const axios = require('axios')
let country = "Brazil"
// const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);

module.exports = getCountry = async () => {
  try {
    const countryCode = await axios.get(`https://restcountries.eu/rest/v2/name/${country}`);
    return await countryCode.data[0].currencies[0].code
  } catch(err) {
    return err.message
  }
}
// const async countryCode = await getCountry()
//   .then(country => country.data[0].currencies[0].code)

// const x = getCountry().then(res => console.log(res))
  // console.log("countryCode:: ", x)
