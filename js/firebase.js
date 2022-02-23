// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
import { getDatabase, ref, set, child, get, onValue } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYOYtvHPEy2i_1bkVaGOppUP67mTby_ME",
  authDomain: "wordle-d113f.firebaseapp.com",
  databaseURL: "https://wordle-d113f-default-rtdb.firebaseio.com/",
  projectId: "wordle-d113f",
  storageBucket: "wordle-d113f.appspot.com",
  messagingSenderId: "646894776547",
  appId: "1:646894776547:web:b5f873a9486f364f0ed5d6",
  measurementId: "G-1TM9PSCG25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Get a reference to the database service
const database = getDatabase(app);

function fn(){
  set(ref(database, 'users/'), {
    username: 200,
    email: 300,
    profile_picture : 600
  });
}
