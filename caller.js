const axios = require('axios')
// require('dotenv').config()
// const myKey = process.env.KEY

const getCurrency = require('./getCurrency.js')

infoCountry = async (countryFrom, countryTo) => {
  // console.log(Date.now())
  
  const exchange = await getCurrency(countryFrom, countryTo)
  

  // nice and simple date formating
  // from https://stackoverflow.com/questions/14638018/current-time-formatting-with-javascript
  const d = new Date();
  // d.toLocaleString();       // -> "2/1/2013 7:37:08 AM"
  // d.toLocaleDateString();   // -> "2/1/2013"
  // d.toLocaleTimeString();  // -> "7:38:05 AM"

  console.log(`
    ### CURRENCY CONVERSION ###
    Right now, ${d.toLocaleString()}
    ${JSON.stringify(exchange.data.quotes)}
  `)
}

infoCountry("brazil", "united")
