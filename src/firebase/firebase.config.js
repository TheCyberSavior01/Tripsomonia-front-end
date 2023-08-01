// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBevoLKiUq2Gkz9FfG24VtcrSrcWapNrGA",
  authDomain: "tripsomonia.firebaseapp.com",
  projectId: "tripsomonia",
  storageBucket: "tripsomonia.appspot.com",
  messagingSenderId: "387417996055",
  appId: "1:387417996055:web:d6f41303d09bea19535552",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
