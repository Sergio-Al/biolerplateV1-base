import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBQhqUnni7f7d-jZRxtpBjsuwUseSWlqCE",
  authDomain: "expensify-bb26b.firebaseapp.com",
  databaseURL: "https://expensify-bb26b-default-rtdb.firebaseio.com",
  projectId: "expensify-bb26b",
  storageBucket: "expensify-bb26b.appspot.com",
  messagingSenderId: "97805232742",
  appId: "1:97805232742:web:fd8684bd8c1b49d4a61ba7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const appDatabase = getDatabase(app);
let refDatabase = ref(appDatabase);

// Adding content to the database

set(refDatabase, {
  name: "Sergio Alejandro",
  age: 23,
  isSingle: true,
  location: {
    city: "La Paz",
    country: "Bolivia",
  },
})
  .then(() => {
    console.log("this worked well!");
  })
  .catch((e) => {
    console.log("this failed!", e);
  });

// set(refDatabase, null); // setting null is remove all data

// set(refDatabase, "this is my data");

// We are referencing to a specific value with 'ref' or creating if doesn't exists
// refDatabase = ref(appDatabase, "age");
// set(refDatabase, 24);

// refDatabase = ref(appDatabase, "location/city");
// set(refDatabase, "Cochabamba");

// refDatabase = ref(appDatabase, "attributes");
// set(refDatabase, {
//   weight: 76,
//   height: 173,
// })
//   .then(() => {
//     console.log("changing attributes worked!");
//   })
//   .catch((e) => {
//     console.log("Changing attributes didn't worked well: ", e);
//   });

// Removing data
// refDatabase = ref(appDatabase);
// remove(refDatabase)
//   .then(() => console.log("removed Data is Single"))
//   .catch((e) => console.log("error while removing data", e));
