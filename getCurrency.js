// https://medium.freecodecamp.org/how-to-master-async-await-with-this-real-world-example-19107e7558ad


const axios = require('axios')
require('dotenv').config()
const myKey = process.env.KEY
const getCountry = require('./getCountry.js')

getCurrency = async (fromCurrency, toCurrency) => {
  const code1 = await getCountry(fromCurrency, "code")
  const code2 = await getCountry(toCurrency, "code")

  return new Promise((res, rej) => {
    try {
      const result = axios
      .get(`http://apilayer.net/api/live?access_key=${myKey}&currencies=${code1}&source=${code2}&format=1`)
      res(result)
    } catch(err) {
      rej(err.message)
    }
  });
}
// # one way to call, locally
// getCurrency("brazil", "united")
//   .then(result => console.log(result.data))

// # another way, as it was called externally
// const asd = async() => {
//   const val = await getCurrency()
//   console.log("val: ", val.data)
// }
// asd()

module.exports = getCurrency