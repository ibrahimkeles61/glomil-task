import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwAMyhrJ4-KHRGEgqBNfbffWVwfTm0lmI",
  authDomain: "glomil-task.firebaseapp.com",
  projectId: "glomil-task",
  storageBucket: "glomil-task.appspot.com",
  messagingSenderId: "596209907497",
  appId: "1:596209907497:web:17699c684e199ccc9be938",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  db,
  doc,
  setDoc,
  getDoc,
};
