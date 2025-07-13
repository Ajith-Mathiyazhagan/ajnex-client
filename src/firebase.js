// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAO-hpnxvrJNKaB1w9H0S0UNLi7JjOS_fI",
  authDomain: "ajnex-b1269.firebaseapp.com",
  projectId: "ajnex-b1269",
  storageBucket: "ajnex-b1269.appspot.com", // ✅ corrected here
  messagingSenderId: "212674017174",
  appId: "1:212674017174:web:b376f06988ee81f4c14fb7",
  measurementId: "G-KQ2Q16VYGE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
