// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOPuGSTnqvulCLAvznCkXOsIAq8WpSaKI",
  authDomain: "to-do-b072a.firebaseapp.com",
  projectId: "to-do-b072a",
  storageBucket: "to-do-b072a.firebasestorage.app",
  messagingSenderId: "267720602571",
  appId: "1:267720602571:web:41f7364364590055f23c4e",
  measurementId: "G-CMHH113FKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app);
// const analytics = getAnalytics(app);