// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCSTo5-OVv5vntM9CKgM-YDOMVhE_O8u8c",
  authDomain: "fitnessco-14db2.firebaseapp.com",
  projectId: "fitnessco-14db2",
  storageBucket: "fitnessco-14db2.appspot.com",
  messagingSenderId: "933211622306",
  appId: "1:933211622306:web:52dfb9d0076bc498df00fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
