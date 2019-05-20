// import getCur from './getCurrency.js'
// import getCou from './getCountry.js'
const getCur = require('./getCurrency.js')
const getCou = require('./getCountry.js')

getCur()
  .then(console.log)

getCou()
  .then(console.log)
