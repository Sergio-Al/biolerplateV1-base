import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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

const db = getDatabase(app);

export default db;
