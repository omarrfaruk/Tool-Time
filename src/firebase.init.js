// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDY5CiLO--iZXFpNaCETkCNKcIDCu2_cH4",
    authDomain: "tool-time-b1da4.firebaseapp.com",
    projectId: "tool-time-b1da4",
    storageBucket: "tool-time-b1da4.appspot.com",
    messagingSenderId: "302640143475",
    appId: "1:302640143475:web:0771e1d3e3cf41097f5e06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;