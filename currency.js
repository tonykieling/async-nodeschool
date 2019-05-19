const axios = require('axios')
require('dotenv').config()
// https://medium.freecodecamp.org/how-to-master-async-await-with-this-real-world-example-19107e7558ad

const myKey = process.env.KEY

getCurrency = async (fromCurrency, toCurrency) => {
  const response = await axios
    .get(`http://apilayer.net/api/live?access_key=${myKey}&currencies=EUR,GBP,CAD,PLN&source=USD&format=1`);
  // console.log(response.data.rates)
  console.log(response.data)
}

// console.log(myKey)
getCurrency()