import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDRkwosJeKDJlt1AWZBsNcE6Gu7iRDYvb8",
  authDomain: "twitter-clone-b476c.firebaseapp.com",
  projectId: "twitter-clone-b476c",
  storageBucket: "twitter-clone-b476c.appspot.com",
  messagingSenderId: "1003508334831",
  appId: "1:1003508334831:web:1fe3cbc08f1cdf22195b1a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
