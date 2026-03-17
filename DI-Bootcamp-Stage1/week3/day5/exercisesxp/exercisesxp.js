
function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) resolve(`${num} is less than or equal to 10`);
        else reject(`${num} is greater than 10`);
    });
}

//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))

  //2.  Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("success"), 4000);
});

promise2.then(result => console.log(result));

//3.Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
Promise.resolve(3)
    .then(value => console.log(value));

Promise.reject("Boo!")
    .catch(error => console.log(error));
