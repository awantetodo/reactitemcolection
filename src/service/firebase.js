// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDh-Zyy4WEUGOQR9HlwzvHTKB0-ILyslH0",
  authDomain: "iruvermu.firebaseapp.com",
  projectId: "iruvermu",
  storageBucket: "iruvermu.appspot.com", 
  messagingSenderId: "828600447309",
  appId: "1:828600447309:web:085c83cc092e61c0f98704"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db