// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLFZH4mC1aG1USluHeg78L5wu44D3duQY",
  authDomain: "halal-food-2514a.firebaseapp.com",
  projectId: "halal-food-2514a",
  storageBucket: "halal-food-2514a.appspot.com",
  messagingSenderId: "442057094347",
  appId: "1:442057094347:web:a5380ed94d70d5337e974e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;