// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEGyr9LFaYgqHDg4yzKl8RxkghNzev230",
  authDomain: "habitapay.firebaseapp.com",
  projectId: "habitapay",
  storageBucket: "habitapay.firebasestorage.app",
  messagingSenderId: "1074822452961",
  appId: "1:1074822452961:web:07992b9e77fcf3048189a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;