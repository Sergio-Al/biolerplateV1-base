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

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {},
};

const { name: publisherName = "Self-Published" } = book.publisher; // Structure: { [element]: [newName Opt?] = [DefaultValue Opt?] } = [Object].

console.log(publisherName); // Default: Self-Published, other: Penguin.
