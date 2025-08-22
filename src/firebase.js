// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6NV9xeij28SBlvtB48rKbhmC_Ahh4Cqs",
  authDomain: "thegreengoofficial.firebaseapp.com",
  projectId: "thegreengoofficial",
  storageBucket: "thegreengoofficial.appspot.com",
  messagingSenderId: "243530098047",
  appId: "1:243530098047:web:3c7733ec2354914829e64a",
  measurementId: "G-QV6SDZPETX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export auth so you can use it in your components
export const auth = getAuth(app);
