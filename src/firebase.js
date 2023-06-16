// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebase = {
  apiKey: "AIzaSyB6mSdn1xRw_7ldxstv_Cytc_rOR80SbWk",
  authDomain: "musitherapy-7a707.firebaseapp.com",
  projectId: "musitherapy-7a707",
  storageBucket: "musitherapy-7a707.appspot.com",
  messagingSenderId: "49117057218",
  appId: "1:49117057218:web:efa444d9ae6cfb715deb5b",
  measurementId: "G-2WP0G0YGX2"
};

// Initialize Firebase
export const app = initializeApp(firebase);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

