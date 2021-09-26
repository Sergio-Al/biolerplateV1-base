import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

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

set(refDatabase, {
  name: "Sergio Alejandro",
  age: 23,
  isSingle: true,
  location: {
    city: "La Paz",
    country: "Bolivia",
  },
});

// set(refDatabase, "this is my data");

refDatabase = ref(appDatabase, "age");
set(refDatabase, 24);

refDatabase = ref(appDatabase, "location/city");
set(refDatabase, "Cochabamba");

refDatabase = ref(appDatabase, "attributes");
set(refDatabase, {
  weight: 76,
  height: 173,
});
