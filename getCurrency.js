// https://medium.freecodecamp.org/how-to-master-async-await-with-this-real-world-example-19107e7558ad


const axios = require('axios')
require('dotenv').config()
const myKey = process.env.KEY
const getCountry = require('./getCountry.js')

getCurrency = async (fromCurrency, toCurrency) => {
  // console.log("fromCurrency:: ", fromCurrency, "toCurrency:: ", toCurrency)
  const code1 = await getCountry(fromCurrency)
  // console.log("code1= ", code1.data[0].currencies[0].code)
  // console.log(Date.now())
  const code2 = await getCountry(toCurrency)
  // console.log(`code2= '${code2.data[0].currencies[0].code}'`)
  // console.log(Date.now())

  return new Promise((res, rej) => {
    try {
      const result = axios
      .get(`http://apilayer.net/api/live?access_key=${myKey}&currencies=${code1.data[0].currencies[0].code}&source=${code2.data[0].currencies[0].code}&format=1`)
      res(result)
    } catch(err) {
      rej(err.message)
    }
  });
}
// # one way to call, locally
// getCurrency()
//   .then(result => console.log(result.data))

// # another way, as it was called externally
// const asd = async() => {
//   const val = await getCurrency()
//   console.log("val: ", val.data)
// }
// asd()

module.exports = getCurrency