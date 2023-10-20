// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoFHT097BJFuG9N8yFKRZfordjylHe3tc",
  authDomain: "auth-brand-project.firebaseapp.com",
  projectId: "auth-brand-project",
  storageBucket: "auth-brand-project.appspot.com",
  messagingSenderId: "572167716678",
  appId: "1:572167716678:web:5dc8286df16eeadd5d6f47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;