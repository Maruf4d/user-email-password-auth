
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwzuGv4r8-ffKxIqzot0T-2dhQg7GsQJQ",
  authDomain: "user-email-password-auth-48803.firebaseapp.com",
  projectId: "user-email-password-auth-48803",
  storageBucket: "user-email-password-auth-48803.appspot.com",
  messagingSenderId: "676344553428",
  appId: "1:676344553428:web:eb35632a2b4ef1e9504041"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;