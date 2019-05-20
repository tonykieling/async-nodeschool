// https://medium.freecodecamp.org/how-to-master-async-await-with-this-real-world-example-19107e7558ad

const axios = require('axios')
require('dotenv').config()

const myKey = process.env.KEY

// const getCurrency = async (fromCurrency, toCurrency) => {
async function getCurrency(fromCurrency, toCurrency) {
  // let response = ""
  try {
    return axios.get(`http://apilayer.net/api/live?access_key=${myKey}&currencies=EUR,GBP,CAD,PLN&source=USD&format=1`)
      // .then(res => console.log(res.data))
    // console.log(fromCurrency, toCurrency)
    // return response
    // console.log("response= ", response.data)
  } catch(err) {
    // console.log("err:: ", err)
    return("err:: ", err)
  }
  // return await (response.data)
  // const response =  await axios
  // return await axios
  //   .get(`http://apilayer.net/api/live?access_key=${myKey}&currencies=EUR,GBP,CAD,PLN&source=USD&format=1`);
  //   // .get(`http://apilayer.net/api/live?access_key=${myKey}&${toCurrency}&source=${fromCurrency}&format=1`);
  // console.log(response.data)
  // // if (response.data)
  // //   console.log(response.data)
  //   // return response.data.success
  //   return response
}

getCurrency()
  .then(res => console.log(res.data))
// console.log("asd: ", getCurrency(1, 2))