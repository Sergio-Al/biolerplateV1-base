const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ message: "This is my resolve data", from: "Sergio" });
    // reject("Something went wrong");
  }, 2000);
});

console.log("before");

promise
  .then((data) => {
    console.log("first", data);

    return "some data";
  })
  .then((str) => {
    // promise chaining fires after the first promise is resolved with callback 'then'
    // otherwise runs the catch method with the error
    // we can provide arguments from the return value from the last callback 'then' returned
    console.log("does this run?", str);
  })
  .catch((e) => {
    console.log("Error: ", e);
  });

console.log("after");
