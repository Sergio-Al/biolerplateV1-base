import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  get,
  set,
  remove,
  update,
  onValue,
  off,
  push,
  onChildRemoved,
  onChildChanged,
  onChildAdded,
} from "firebase/database";

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
let expensesRef = ref(appDatabase, "expenses");

// child_removed: execute the callback when a child id removed
// captures the value deleted in snapshot
onChildRemoved(ref(appDatabase, "expenses"), (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed: execute the callback when a child of the query (our ref([values])) has changed.
// captures the value changed in snapshot
onChildChanged(expensesRef, (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added: execute the callback when a child is added (a new expense)
onChildAdded(expensesRef, (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// onValue(
//   expensesRef,
//   (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   },
//   {
//     onlyOnce: true,
//   }
// );

// onValue(expensesRef, (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });

//   console.log(expenses);
// });

push(expensesRef, {
  description: "Gum",
  note: "This is a data",
  amount: 2343,
  createdAt: 34234200,
});

// remove(ref(appDatabase, "notes/-Mkc5CTZkelWV2qiWr75"));

// update(ref(appDatabase, "notes/-Mkc3Ym5exYSEv11zZLG"), {
//   body: "Buy drink",
// });

// push(ref(appDatabase, "notes"), {
//   title: "Course finished",
//   body: "React",
// });

// ***Getting content from firebase

// onValue(ref(appDatabase), (snapshot) => {
//   const value = snapshot.val();
//   console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`);
// });

// setTimeout(() => {
//   set(ref(appDatabase, "job"), {
//     title: "Web Developer",
//     company: "Tesla",
//   });
// }, 3000);

// const onValueChange = onValue(
//   refDatabase,
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   (e) => {
//     console.log("Error with data fetching", e);
//   }
// );

// setTimeout(() => {
//   set(ref(appDatabase, "age"), 26);
// }, 3500);

// setTimeout(() => {
//   off(ref(appDatabase), onValueChange);
// }, 7000);

// setTimeout(() => {
//   set(ref(appDatabase, "age"), 28);
// }, 10500);

// onValue(
//   ref(appDatabase, "location/city"),
//   (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   },
//   {
//     onlyOnce: true,
//   }
// );

// ***Adding content to the database

// set(refDatabase, {
//   name: "Sergio Alejandro",
//   age: 23,
//   stressLevel: 8,
//   job: {
//     title: "Software Developer",
//     company: "Google",
//   },
//   location: {
//     city: "La Paz",
//     country: "Bolivia",
//   },
// })
//   .then(() => {
//     console.log("this worked well!");
//   })
//   .catch((e) => {
//     console.log("this failed!", e);
//   });

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

// ***Removing data
// refDatabase = ref(appDatabase);
// remove(refDatabase)
//   .then(() => console.log("removed Data is Single"))
//   .catch((e) => console.log("error while removing data", e));

// ***Updating data

// update(ref(appDatabase), {
//   name: "Alejandro",
//   age: 23,
//   job: "Software Developer", // Adding new data
//   isSingle: null, // removing data
// });

// update(refDatabase, {
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle",
// });
