// https://medium.freecodecamp.org/how-to-master-async-await-with-this-real-world-example-19107e7558ad

'use strict';

const axios = require('axios')
require('dotenv').config()

const myKey = process.env.KEY

// const getCurrency = async (fromCurrency, toCurrency) => {
async function getCurrency(fromCurrency, toCurrency) {
  try {
    const res = await axios
      .get(`http://apilayer.net/api/live?access_key=${myKey}&currencies=EUR,GBP,CAD,PLN&source=USD&format=1`)
    return res.data
  } catch(err) {
    return("err:: ", err)
  }
}

module.exports = getCurrency
