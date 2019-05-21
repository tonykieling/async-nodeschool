const axios = require('axios')

// const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);


// this function returns the code for a passed country
module.exports = getCountry = async (country) => {
  try {
    const countryCode = await axios.get(`https://restcountries.eu/rest/v2/name/${country}`);
    return await countryCode.data[0].currencies[0].code
  } catch(err) {
    return err.message
  }
}
