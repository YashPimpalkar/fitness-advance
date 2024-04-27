// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {GoogleAuthProvider,getAuth}from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6mPkUEyXaIdnzHyB8wEFDPNjRmK-2s2Y",
  authDomain: "fitness-club-ae7bf.firebaseapp.com",
  projectId: "fitness-club-ae7bf",
  storageBucket: "fitness-club-ae7bf.appspot.com",
  messagingSenderId: "842065042562",
  appId: "1:842065042562:web:58fb30a8ce1967305f689b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth=getAuth();
 export const googleAuthProvider=new GoogleAuthProvider;

 export default app;
