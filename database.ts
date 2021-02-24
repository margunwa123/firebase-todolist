// database setup
import firebase from "firebase";
import admin from "firebase-admin";
import serviceAccountKey from "./serviceAccountKey.json";

var firebaseConfig = {
  apiKey: "AIzaSyAtU7Vvi8z25qXApsuzuFyk-RSvHH_XJX4",
  authDomain: "todolist-44334.firebaseapp.com",
  projectId: "todolist-44334",
  storageBucket: "todolist-44334.appspot.com",
  messagingSenderId: "9722961229",
  appId: "1:9722961229:web:f17e1e77a2e642dfd52b04",
  measurementId: "G-CRT6QTJV4V",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  admin.initializeApp({ credential: admin.credential.cert(serviceAccountKey) });
} else {
  firebase.app();
}

export default admin.firestore();
