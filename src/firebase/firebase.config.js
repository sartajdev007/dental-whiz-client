// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD89rEG4IHYLzjfPDW3Tce213I47PRpwqo",
    authDomain: "dental-whiz-website.firebaseapp.com",
    projectId: "dental-whiz-website",
    storageBucket: "dental-whiz-website.appspot.com",
    messagingSenderId: "1053992117985",
    appId: "1:1053992117985:web:f819fc93989a65c967f9a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app