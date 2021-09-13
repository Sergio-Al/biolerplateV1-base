//
//
// Object destructuring

// const person = {
//   name: "Sergio",
//   age: 23,
//   location: {
//     city: "La Paz",
//     temp: 14,
//   },
// };

// const { name: firstName = "Anonymous", age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`its ${temperature} in ${city}.`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {},
// };

// const { name: publisherName = "Self-Published" } = book.publisher; // Structure: { [element]: [newName Opt?] = [DefaultValue Opt?] } = [Object].

// console.log(publisherName); // Default: Self-Published, other: Penguin.







//
//
// Array destructuring

// const address = [
//   "1299 S Juniper Street",
//   "Philadelphia",
//   "Pennsylvania",
//   "192394",
// ];

// const address2 = [];

// const [, , city, state] = address;
// const [, , state2 = "New York"] = address2; // matching by position

// console.log(`You are in ${city} ${state}`);
// console.log(`You are in ${state2}`);

const item = ["Coffee (iced)", "$3.00", "$3.50", "$3.75"];

const [itemName = "Nothing", , mediumPrice = "$0.00"] = item;

console.log(`A medium ${itemName} cost ${mediumPrice} `);
