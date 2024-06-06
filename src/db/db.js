import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDc8V339S2hem58O5V9edpKTWcvRQT2b0U",
  authDomain: "e-commerce-54085.firebaseapp.com",
  projectId: "e-commerce-54085",
  storageBucket: "e-commerce-54085.appspot.com",
  messagingSenderId: "676124534780",
  appId: "1:676124534780:web:65ee294985f608022d7479"
};

hinitializeApp(firebaseConfig);

const db = getFirestore()

export default db