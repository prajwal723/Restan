
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmbakxz9kwQKRSK1i6OAOJkYrq_j48_Pc",
  authDomain: "restaurant-cmp.firebaseapp.com",
  projectId: "restaurant-cmp",
  storageBucket: "restaurant-cmp.firebasestorage.app",
  messagingSenderId: "285310072466",
  appId: "1:285310072466:web:158941e4458eb167f4584b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authFeature = getAuth(app);
