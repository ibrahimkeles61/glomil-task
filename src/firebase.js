import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwAMyhrJ4-KHRGEgqBNfbffWVwfTm0lmI",
  authDomain: "glomil-task.firebaseapp.com",
  projectId: "glomil-task",
  storageBucket: "glomil-task.appspot.com",
  messagingSenderId: "596209907497",
  appId: "1:596209907497:web:17699c684e199ccc9be938",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, setDoc, getDoc };
