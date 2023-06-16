import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCChTe-aaZSbryvKdInHO6Vb43tcqUvBCo",
  authDomain: "meet-fee38.firebaseapp.com",
  databaseURL: "https://meet-fee38-default-rtdb.firebaseio.com",
  projectId: "meet-fee38",
  storageBucket: "meet-fee38.appspot.com",
  messagingSenderId: "722982990967",
  appId: "1:722982990967:web:82e0d90cb2f94c67c6c272",
  measurementId: "G-9S80GFCRDC"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { auth, firestore };
