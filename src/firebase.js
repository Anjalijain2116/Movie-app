// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firebase from './firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBOsbIW14kurE_0AjxApyAiO4isYCXXDc",
  authDomain: "movie-app-27647.firebaseapp.com",
  projectId: "movie-app-27647",
  storageBucket: "movie-app-27647.appspot.com",
  messagingSenderId: "96407804468",
  appId: "1:96407804468:web:1962723751fb3f9ab2c861"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.firestore();
const auth = auth();

export {auth,db};