import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDJjcAICWGklxv6LZgnVy7cUcTv-I2YtJQ",
  authDomain: "xtream-posts.firebaseapp.com",
  projectId: "xtream-posts",
  storageBucket: "xtream-posts.appspot.com",
  messagingSenderId: "615886974186",
  appId: "1:615886974186:web:6ccaad0c313ccf37d67b93",
};

//If there's more than one app connected it will throw an error.
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
