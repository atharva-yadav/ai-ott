// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApkvQWNltmRSThoUAi4-mMYkcwFFIOXvs",
  authDomain: "cinegpt28.firebaseapp.com",
  projectId: "cinegpt28",
  storageBucket: "cinegpt28.firebasestorage.app",
  messagingSenderId: "637175870276",
  appId: "1:637175870276:web:a49a84df8ca65ddf561d11",
  measurementId: "G-917PMFT72M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);