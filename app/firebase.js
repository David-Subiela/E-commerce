// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw9LSmVR3pmEjPfqlOZfHe3gVeqxz0sgY",
  authDomain: "kamile-ec.firebaseapp.com",
  projectId: "kamile-ec",
  storageBucket: "kamile-ec.appspot.com",
  messagingSenderId: "820351947556",
  appId: "1:820351947556:web:6a77aeae08898a728b99b1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
