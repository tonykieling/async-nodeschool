const axios = require('axios')
// require('dotenv').config()
// const myKey = process.env.KEY

const getCurrency = require('./getCurrency.js')
// const getCountry = require('./getCountry.js')

infoCountry = async (countryFrom, countryTo) => {
  // console.log(Date.now())
  
  const exchange = await getCurrency(countryFrom, countryTo)
  

  // nice and simple date formating
  // from https://stackoverflow.com/questions/14638018/current-time-formatting-with-javascript
  const d = new Date();
  // d.toLocaleString();       // -> "2/1/2013 7:37:08 AM"
  // d.toLocaleDateString();   // -> "2/1/2013"
  // d.toLocaleTimeString();

  console.log(`
    ### CURRENCY CONVERSION ###
    Right now, ${d.toLocaleString()}
    ${JSON.stringify(exchange.data.quotes)}
  `)
}

  // console.log("res= ", exchange.data.success)
  // console.log(Date.now())
  
  // return new Promise((res, rej) => {
  //   console.log(Date.now())
  //   try {
  //     console.log(Date.now())
  //     // const countryCodeFrom = await getCountry(countryFrom);
  //     // const countryCodeTo = await getCountry(countryTo)
  //     // const exchange = await getCurrency(countryFrom, countryTo)
  //     console.log("res= ", exchange.data.success)
  //     res(exchange.data.success)
  //   } catch(err) {
  //     return err.message
  //   }
  // }
  // )}

infoCountry("brazil", "united")
