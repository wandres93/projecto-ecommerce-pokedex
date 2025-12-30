import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNMbCgEKO1jvFtlvSzSg0pcHUrN9RSMyU",
  authDomain: "ecommers-projecto.firebaseapp.com",
  projectId: "ecommers-projecto",
  storageBucket: "ecommers-projecto.firebasestorage.app",
  messagingSenderId: "290240907090",
  appId: "1:290240907090:web:e139ad176ce06fe0b2dc8b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
