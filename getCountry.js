// const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);

getCountry = async () => {
  const response = await axios.get(`https://restcountries.eu/rest/v2/name/brazil`);
  return response
}

console.log(getCountry)