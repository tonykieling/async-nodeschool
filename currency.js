// https://medium.freecodecamp.org/how-to-master-async-await-with-this-real-world-example-19107e7558ad

const myKey = ""

getCurrency = async (fromCurrency, toCurrency) => {
  const response = await axios.get(`http://data.fixer.io/api/latest?access_key=${myKey}&format=1`);
  console.log(response.data.rates)
}
