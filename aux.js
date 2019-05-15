// https://medium.freecodecamp.org/how-to-master-async-await-with-this-real-world-example-19107e7558ad
// diff btw promise and async/await:

// Async/Await

asyncGreeting = async () => "ASYNC Greetings"
// const asyncGreeting = async () => {
//   throw new Error('ASYNC ERROR');
// }

asyncGreeting()
.then(result => console.log(result))
.catch(error => console.log(error.message))



// Promises
promiseGreeting = () => new Promise(((resolve) => {
  resolve('PROMISE Greetings');
}));

promiseGreeting()
  .then(result => console.log(result));