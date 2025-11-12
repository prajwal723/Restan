"use client"

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBjS_MQodp8vArj268INUxa0XkkVQJ6Ipw",
  authDomain: "skill-lab-c3fd0.firebaseapp.com",
  projectId: "skill-lab-c3fd0",
  storageBucket: "skill-lab-c3fd0.appspot.com",
  messagingSenderId: "267044364563",
  appId: "1:267044364563:web:47e53dc8a58c9e52d2bae6"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
