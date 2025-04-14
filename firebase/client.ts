// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAuYrw-2I4l4vwUsFjlkHygmAbc86HYUKM",
  authDomain: "mockmate-24769.firebaseapp.com",
  projectId: "mockmate-24769",
  storageBucket: "mockmate-24769.firebasestorage.app",
  messagingSenderId: "1081178785286",
  appId: "1:1081178785286:web:6a1814186f9a65d936e587",
  measurementId: "G-C6SZ9MTEY9"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);