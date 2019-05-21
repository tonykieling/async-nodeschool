const axios = require('axios')
// require('dotenv').config()
// const myKey = process.env.KEY

const getCurrency = require('./getCurrency.js')
const getCountry = require('./getCountry.js')

// getCur()
//   .then(console.log)

// getCou('brazil')
//   .then(console.log)

// const ax = getCou().then()

// const ax = Promise.all([getCou('brazil'), getCur()])
// console.log("ax: ", ax)

infoCountry = async (countryFrom, countryTo) => {
  try {
    // const countryCodeFrom = await axios.get(`https://restcountries.eu/rest/v2/name/${countryFrom}`);
    const countryCodeFrom = await getCountry(countryFrom);
    // console.log("asd: ", countryCodeFrom.data[0].currencies[0].code)
    const countryCodeTo = await getCountry(countryTo)
    // console.log("asd: ", countryCodeTo.data[0].currencies[0])
    const exchange = await getCurrency(countryFrom, countryTo)
    // const res = await axios
      // .get(`http://apilayer.net/api/live?access_key=${myKey}&currencies=${countryCodeFrom.data[0].currencies[0].code}&source=${countryCodeTo.data[0].currencies[0].code}&format=1`)
      // .get(`http://apilayer.net/api/live?access_key=${myKey}&currencies=CAD&source=USD&format=1`)
    console.log("res= ", exchange.data)
    // return await countryCode.data[0].currencies[0].code
  } catch(err) {
    return err.message
  }
}

infoCountry("canada", "united")