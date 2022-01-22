import { firebase } from "firebase";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGIND_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

var app;
//If there's more than one app connected it will throw an error.
if (!firebase.apps.length) {
  app = initializeApp(firebaseConfig);
}

const db = getFirestore(app);
