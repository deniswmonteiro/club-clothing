import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLoEpTuZBgu9LVgTLzEzizV4aVXeTbf9Y",
  authDomain: "club-clothing-7616d.firebaseapp.com",
  projectId: "club-clothing-7616d",
  storageBucket: "club-clothing-7616d.firebasestorage.app",
  messagingSenderId: "362938825432",
  appId: "1:362938825432:web:c5137bf51205480112b5ad",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
