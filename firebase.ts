import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZh6m2jQu9AS_pn1LuwJ-NEViGiBgS2Gc",
  authDomain: "uber-clone-9d54b.firebaseapp.com",
  projectId: "uber-clone-9d54b",
  storageBucket: "uber-clone-9d54b.appspot.com",
  messagingSenderId: "218438161253",
  appId: "1:218438161253:web:ceb1a5fb5857ff7a6b878c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
