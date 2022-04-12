// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzvHQ5J9vy0zsqADNU5jz9GQHNh6kShnU",
    authDomain: "ema-john-simple-d30df.firebaseapp.com",
    projectId: "ema-john-simple-d30df",
    storageBucket: "ema-john-simple-d30df.appspot.com",
    messagingSenderId: "79658364328",
    appId: "1:79658364328:web:b29ce2c3fe84f33806c19d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;