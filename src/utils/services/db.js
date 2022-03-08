import "firebase/firestore";

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDaPaSP0EJikIqN7p4Pqch9ny0jIZhzmXo",
  authDomain: "exchange-f1d8e.firebaseapp.com",
  databaseURL: "https://exchange-f1d8e-default-rtdb.firebaseio.com",
  projectId: "exchange-f1d8e",
  storageBucket: "exchange-f1d8e.appspot.com",
  messagingSenderId: "637416696417",
  appId: "1:637416696417:web:25b6ecf830093c8ec75820",
  measurementId: "G-J1P50V28JL",
};

const app = firebase.initializeApp(firebaseConfig);

export default function getDB() {
  return firebase.database(app);
}
