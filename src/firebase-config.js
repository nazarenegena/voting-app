// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBfAdZPUaZ-_tvwscY4RkaiXD6sHtVNuE",
  authDomain: "votesphere-249fd.firebaseapp.com",
  projectId: "votesphere-249fd",
  storageBucket: "votesphere-249fd.appspot.com",
  messagingSenderId: "317628864899",
  appId: "1:317628864899:web:ef85538e7c592793cfbeb6",
  measurementId: "G-82NGDM5R7M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
