
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.APIkey,
  authDomain: "mihai-octavianos.firebaseapp.com",
  projectId: "mihai-octavianos",
  storageBucket: "mihai-octavianos.appspot.com",
  messagingSenderId: "1014810054067",
  appId: "1:1014810054067:web:523a13252941d166020fc6",
  measurementId: "G-XZP9H03GJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);