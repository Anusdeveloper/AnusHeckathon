// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore , setDoc , doc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMfmYppseCw4HCZ64BPzxpjuLvbuTxtrQ",
  authDomain: "sign-up-n-login-page.firebaseapp.com",
  projectId: "sign-up-n-login-page",
  storageBucket: "sign-up-n-login-page.appspot.com",
  messagingSenderId: "711602153419",
  appId: "1:711602153419:web:dcc5478723e22a0979f84e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);