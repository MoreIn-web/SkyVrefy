// Firebase config
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, collection, addDoc, doc, updateDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDeEHvWStnN-GMHlrBnqPNzZZBEYqng6wE",
  authDomain: "skydellvery.firebaseapp.com",
  projectId: "skydellvery",
  storageBucket: "skydellvery.appspot.com",
  messagingSenderId: "1060943398926",
  appId: "1:1060943398926:web:c50f75aa27729caf97d45f",
  measurementId: "G-F4RD4D7B8D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, doc, updateDoc, onSnapshot };
