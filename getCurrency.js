// https://medium.freecodecamp.org/how-to-master-async-await-with-this-real-world-example-19107e7558ad


const axios = require('axios')
require('dotenv').config()
const myKey = process.env.KEY

// this function returns the actual currency convertion from / to
// it has to receive the countries' (from and to) code
// async function getCurrency(fromCurrency, toCurrency) {
//   try {
//     const res = await axios
//       .get(`http://apilayer.net/api/live?access_key=${myKey}&currencies=CAD&source=USD&format=1`)
//     // return res.data
//     console.log(res.data)
//   } catch(err) {
//     return("err:: ", err)
//   }
// }
// getCurrency()
// module.exports = getCurrency

function getCurrency(fromCurrency, toCurrency) {
  return new Promise((res, rej) => {
    try {
      const result = axios.get(`http://apilayer.net/api/live?access_key=${myKey}&currencies=CAD&source=USD&format=1`)
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