import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNprtlIzYnX9-PTBXmvWXC3zGsbDGKMNU",
  authDomain: "mobileii-ds.firebaseapp.com",
  projectId: "mobileii-ds",
  storageBucket: "mobileii-ds.firebasestorage.app",
  messagingSenderId: "856348051928",
  appId: "1:856348051928:web:fe74c9e1371275321d0aad"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };