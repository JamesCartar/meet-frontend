import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSQwRtXiSGxDKKMsSww4eCAD5biYZpmmM",
  authDomain: "aptm-e363c.firebaseapp.com",
  databaseURL: "https://aptm-e363c-default-rtdb.firebaseio.com",
  projectId: "aptm-e363c",
  storageBucket: "aptm-e363c.appspot.com",
  messagingSenderId: "779487278709",
  appId: "1:779487278709:web:357dccabe968597a24aa3c",
  measurementId: "G-HDBPZ76XLP"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { auth, firestore };
