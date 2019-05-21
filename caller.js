const axios = require('axios')
// require('dotenv').config()
// const myKey = process.env.KEY

const getCurrency = require('./getCurrency.js')
// const getCountry = require('./getCountry.js')

infoCountry = async (countryFrom, countryTo) => {
  // console.log(Date.now())
  
  const exchange = await getCurrency(countryFrom, countryTo)
  
  console.log(`
    ### CURRENCY CONVERSION ###
    Right now, ${Date.now()}
    One 
    ${exchange.data.success}
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
