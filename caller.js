const getCur = require('./getCurrency.js')
const getCou = require('./getCountry.js')

// getCur()
//   .then(console.log)

// getCou('brazil')
//   .then(console.log)

// const ax = getCou().then()

const ax = Promise.all([getCou('brazil'), getCur()])
console.log("ax: ", ax)
