// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNRKJe4YdKoU8Kvew7HP4Mnk6XIvyvFPI",
  authDomain: "fireapprahul.firebaseapp.com",
  projectId: "fireapprahul",
  storageBucket: "fireapprahul.appspot.com",
  messagingSenderId: "991989757062",
  appId: "1:991989757062:web:93a7b68d77eb38bf210d07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
