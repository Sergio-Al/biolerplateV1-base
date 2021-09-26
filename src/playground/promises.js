const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({ message: "This is my resolve data", from: "Sergio" });
    reject("Something went wrong");
  }, 2000);
});

console.log("before");

promise
  .then((data) => {
    console.log("first", data);
  })
  .catch((e) => {
    console.log("Error: ", e);
  });

console.log("after");
