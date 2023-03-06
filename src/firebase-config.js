 
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'



const  firebaseConfig = {
  apiKey: "AIzaSyAf1dTFxLS7MT6CIMuXOZLP3X96QsUMLrk",
  authDomain: "sreeplaysblog.firebaseapp.com",
  projectId: "sreeplaysblog",
  storageBucket: "sreeplaysblog.appspot.com",
  messagingSenderId: "258420534094",
  appId: "1:258420534094:web:5f3821bfcbe3f240668c1f"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();