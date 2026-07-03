/**
 * ==========================================================
 * Firebase Configuration
 * ==========================================================
 *
 * Purpose:
 * Initializes Firebase and exports
 * the services used throughout AI JobFit.
 * ==========================================================
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtd4vahPvswbCAUFYt77ViG3sYA8oZuag",
  authDomain: "ai-jobfit-98342.firebaseapp.com",
  projectId: "ai-jobfit-98342",
  storageBucket: "ai-jobfit-98342.firebasestorage.app",
  messagingSenderId: "724990312509",
  appId: "1:724990312509:web:1728b015b9f9faa24bea54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;