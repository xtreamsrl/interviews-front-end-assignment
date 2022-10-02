import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_APIKEY,
  authDomain: 'blogproject-3aeb9.firebaseapp.com',
  projectId: 'blogproject-3aeb9',
  storageBucket: 'blogproject-3aeb9.appspot.com',
  messagingSenderId: '420947232418',
  appId: '1:420947232418:web:1129e4790eda02b542b9fb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
