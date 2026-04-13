// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "burger-8b99a.firebaseapp.com",
  projectId: "burger-8b99a",
};

const app = initializeApp(firebaseConfig);

// ✅ correct export
export const db = getFirestore(app);    