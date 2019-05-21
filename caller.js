// const getCur = require('./getCurrency.js')
// const getCou = require('./getCountry.js')

// getCur()
//   .then(console.log)

// getCou('brazil')
//   .then(console.log)

// const ax = getCou().then()

// const ax = Promise.all([getCou('brazil'), getCur()])
// console.log("ax: ", ax)

const axios = require('axios')
require('dotenv').config()
const myKey = process.env.KEY

// countryCode.data[0].currencies[0].code

getCountry = async (countryFrom, countryTo) => {
  try {
    const countryCodeFrom = await axios.get(`https://restcountries.eu/rest/v2/name/${countryFrom}`);
    console.log("asd: ", countryCodeFrom.data[0].currencies[0].code)
    const countryCodeTo = await axios.get(`https://restcountries.eu/rest/v2/name/${countryTo}`);
    console.log("asd: ", countryCodeTo.data[0].currencies[0])
    const res = await axios
      .get(`http://apilayer.net/api/live?access_key=${myKey}&currencies=${countryCodeFrom.data[0].currencies[0].code}&source=${countryCodeTo.data[0].currencies[0].code}&format=1`)
      // .get(`http://apilayer.net/api/live?access_key=${myKey}&currencies=CAD&source=USD&format=1`)
    console.log("res= ", res.data)
    // return await countryCode.data[0].currencies[0].code
  } catch(err) {
    return err.message
  }
}
console.log("hi")
getCountry("canada", "united")