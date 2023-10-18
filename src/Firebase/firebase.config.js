// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvaUufh1VwRwcI8l2CA-TkVTo2ZthZKiY",
    authDomain: "brand-shop-3a60e.firebaseapp.com",
    projectId: "brand-shop-3a60e",
    storageBucket: "brand-shop-3a60e.appspot.com",
    messagingSenderId: "120793796316",
    appId: "1:120793796316:web:1d29058802ab8be16b6e19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
