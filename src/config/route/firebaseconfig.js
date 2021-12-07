import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getDatabase,
  onChildAdded,
  child,
  ref,
  push,
  update,
  set,
} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQMYaGrDfLeOyVI2rPGqflyIB8Bda6Foo",
    authDomain: "hekaton-app.firebaseapp.com",
    databaseURL: "https://hekaton-app-default-rtdb.firebaseio.com",
    projectId: "hekaton-app",
    storageBucket: "hekaton-app.appspot.com",
    messagingSenderId: "819596463214",
    appId: "1:819596463214:web:5ad1d59ba2a7d850b0ea7f"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  database,
  onChildAdded,
  child,
  ref,
  push,
  update,
  set,
};
