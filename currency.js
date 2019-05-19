const axios = require('axios')
// https://medium.freecodecamp.org/how-to-master-async-await-with-this-real-world-example-19107e7558ad

const myKey = "4200f01792899473248cd9bff4c9c780"

getCurrency = async (fromCurrency, toCurrency) => {
  // const response = await axios.get(`http://data.fixer.io/api/latest?access_key=${myKey}&format=1`);
  const response = await axios.get(`http://apilayer.net/api/live?access_key=4200f01792899473248cd9bff4c9c780&currencies=EUR,GBP,CAD,PLN&source=USD&format=1`);
  // const response = await axios.get(`http://apilayer.net/api/live?access_key=${myKey}&source=EUR&currencies=USD,GBP,AUD`);
  // console.log(response.data.rates)
  console.log(response.data)
}

// console.log(axios.get(`http://data.fixer.io/api/latest?access_key=${myKey}&format=1`))
getCurrency()