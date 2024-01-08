
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBg83P3WChtaielMxehuSqTNJyHqBHlpd8",
  authDomain: "react-olx-clone-ed51e.firebaseapp.com",
  projectId: "react-olx-clone-ed51e",
  storageBucket: "react-olx-clone-ed51e.appspot.com",
  messagingSenderId: "502799227618",
  appId: "1:502799227618:web:16f0a7d71c1feac8b75cbb"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);