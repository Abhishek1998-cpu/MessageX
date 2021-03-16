import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC1o5J1eEHFN4urmwSMUfc_2hZjfLHXLGQ",
  authDomain: "messengerclone-fee83.firebaseapp.com",
  projectId: "messengerclone-fee83",
  storageBucket: "messengerclone-fee83.appspot.com",
  messagingSenderId: "315162086034",
  appId: "1:315162086034:web:bb66c24a84f94b089af44b",
  measurementId: "G-5YGW49FJCB",
});

const db = firebaseApp.firestore();
export default db;
