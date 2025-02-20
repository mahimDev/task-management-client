// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMWkKWbkFszB2OFqy_Bqv6kdCh428onLs",
  authDomain: "task-management-applicat-b67ac.firebaseapp.com",
  projectId: "task-management-applicat-b67ac",
  storageBucket: "task-management-applicat-b67ac.firebasestorage.app",
  messagingSenderId: "381066252840",
  appId: "1:381066252840:web:3859742b03502bb2f5db1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
