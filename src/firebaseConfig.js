// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2DcZ0qgjSXL4lgXv4TJOR4O62DbWw8LM",
  authDomain: "lets-travel-acc47.firebaseapp.com",
  projectId: "lets-travel-acc47",
  storageBucket: "lets-travel-acc47.firebasestorage.app",
  messagingSenderId: "1064731015624",
  appId: "1:1064731015624:web:793c2f18abfe429aa228fd",
  measurementId: "G-B61KSN8891"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { auth, db, storage, analytics };