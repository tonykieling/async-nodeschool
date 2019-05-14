const myFunc = (toDo, a, b) => {
  return new Promise((res, rej) => {
    try {
      console.log("operator is '", toDo, "' , a=", a, ", b=", b)
      if (toDo === "+") res(`a + b = ${a + b}`)
      if (toDo === "-") res(`a - b = ${a - b}`)
      throw new Error("something wrong!")
    } 
    catch (e) {
      rej(e.message)
    }
  })
}

myFunc("+", 1, 3)
  // .then(console.log, error => console.error(error))
  .then(console.log)  // handling resolve
  .then(_ => console.log("all good"))
  .catch(console.log) // hangling reject
